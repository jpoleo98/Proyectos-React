import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarCliente } from "../data/Clientes";

export async function action({params}){
    await eliminarCliente(params.clienteId);
    return redirect('/');
}

const Clientes = ({ cliente }) => {

    const navigate = useNavigate();

    return (
        <tr className="border-b ">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{cliente.nombre}</p>
                <p>{cliente.empresa}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{cliente.email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{cliente.telefono}</p>
            </td>

            <td className="p-6 flex gap-3">
                <button type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${cliente.id}/editar`)}>
                    Editar
                </button>
                <Form
                    method="post"
                    action={`/clientes/${cliente.id}/eliminar`}
                    onSubmit={(e) =>{
                        if(!confirm('¿Desea eliminar este registro?')){
                            e.preventDefault();
                        }
                    }}
                >
                    <button type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                        Eliminar
                    </button>
                </Form>
            </td>

        </tr>
    )
}

export default Clientes