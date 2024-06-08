

function Nyhedsbrev() {

  return (
    <div className=''>
        <div className='max-w-4xl mx-auto mb-20'>
            <p className='text-Hotpink text-3xl sm:text-4xl mb-5 font-semibold'>Join our newsletter</p>
            <p className='text-White max-w-xl text-lg sm:text-sm font-normal mb-5'>Dont miss out on exclusive Foo Festival updates! Sign up for our newsletter and be among the first to receive news about the line-up, ticket sales, and other exciting things</p>
            
            <input 
            type="email" 
            placeholder=' email' 
            id="email" 
            pattern=".+@example\.com" 
            className='p-1.5 text-lg  w-52 sm:w-80' 
            />

            <button className='bg-Hotpink font-bold py-5 sm:py-1.5 px-8 text-mg md:text-lg ml-3 text-White hover:bg-Lightpink'>SEND</button>
        </div>
      
    </div>
  )
}

export default Nyhedsbrev
