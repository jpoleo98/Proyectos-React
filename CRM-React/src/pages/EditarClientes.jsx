import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom';
import { obtenerCliente, editarCliente } from '../data/Clientes';
import Formulario from '../components/Formulario';
import Error from '../components/Error';

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No hay Resultado'
    })
  }
  return cliente;
}

export async function action({ request, params }) {

  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  // Validación 

  const errores = [];
  const email = formData.get('email')

  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son necesarios...');
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errores.push('El email no es valido...');
  }

  // retornar errores
  if (Object.keys(errores).length) {
    return errores;
  }


  //Actualizar Cliente

  await editarCliente(datos,params.clienteId);

  return redirect('/');

}

const EditarClientes = () => {

  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className='text-4xl font-black text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>A continuación podra modificar los datos de un cliente</p>

      <div className='flex justify-end'>
        <button className='bg-blue-900 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate('/')}>
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">

        {errores?.length && errores.map((error, i) => (
          <Error key={i}>{error}</Error>
        ))}

        <Form
          method='POST'
          noValidate
        >
          <Formulario
            cliente={cliente}
          />
          <input
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer'
            value="Guardar Cambios"
          />
        </Form>
      </div>
    </>
  )
}

export default EditarClientes