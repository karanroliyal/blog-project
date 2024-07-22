import Image from "next/image";
import Link from "next/link";

console.log(process.env.MY_SERVER_URL)
export async function getData(){
    let result = await fetch(process.env.MY_SERVER_URL)
    result = await result.json();
    console.log(result)
    return result;
}

export default async function Blog() {
    const data = await getData();
    // const blogData = data;
  return (
    <div className='my-blog-wrapper'>
      <h1 className='blog-page-heading'>My Blog page</h1>
      {
        data.data.map((item)=>{
            return <div key={item.id} className="blog-container">
                <h4>{item.attributes.title}</h4>
                <span>Author : {item.attributes.author}<p>Date : {item.attributes.date}</p></span>
                <Image 
                width={item.attributes.image.data[0].attributes.formats.thumbnail.width}
                height={item.attributes.image.data[0].attributes.formats.thumbnail.height}
                src={`http://localhost:1337${item.attributes.image.data[0].attributes.formats.thumbnail.url}`}/>
                {/* <p>{item.attributes.content}</p> */}
                <Link href={`/blog/${item.id}`}>Read more</Link>
            </div>
        })
      }
    </div>
  );
}
