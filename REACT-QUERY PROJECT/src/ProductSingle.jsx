import{useQuery} from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import{useParams} from "react-router-dom";
import axios from 'axios';
import{Link} from "react-router-dom";
export const ProductSingle=()=>{
   
    const params=useParams();
    // const{mutate,isError,isLoading}
    const mutation=useMutation({
        mutationFn:(newProduct)=>{
            return axios.put(`https://dummyjson.com//products/${params.productId}`,newProduct)
        },
    })
    const fetchProduct=async ()=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response=await fetch(`https://dummyjson.com/products/${params.productId}`);
        const data=await response.json();
        return data;
    }
    const{isLoading,error,data:product}=useQuery({queryKey:['products',params.productId],queryFn:fetchProduct})
   
    
    if(mutation.isLoading){
        return <h3>Updating...</h3>
        
    }
    if(mutation.isError){
        return <h3>

            Error:{mutation.error.message}
        </h3>
    }
    return (
        
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
        
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                 
                    <div key={product.id} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          alt={product.title}
                          src={product.thumbnail }
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <Link to={`/products/${product.id}`}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.title}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                    </div>
                
                </div>
                <button onClick={()=>{
                    mutation.mutate({title:'UpdatedProduct'})
                }}>
                    Update Product
                </button>

              </div>
            </div>
    )
}
// export default ProductSingle;

