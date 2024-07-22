import Image from "next/image";

console.log(process.env.MY_SERVER_URL)

export async function getData(id){
    let result = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`)
    result = await result.json();
    return result;
  }

export default async function page({params}) {
  let blog =[]
  const id = params.blogid;
  blog = await getData(id);
  return (
    <div>
      <h1 style={{textAlign:'center'}}>{id}. Blog</h1>
      <h1>{blog.data.attributes.title}</h1>
        <p><b>Author : </b>{blog.data.attributes.author}</p>
        <p><b>Date : </b>{blog.data.attributes.date}</p>
        <Image
        width={blog.data.attributes.image.data[0].attributes.formats.thumbnail.width}
        height={blog.data.attributes.image.data[0].attributes.formats.thumbnail.height}
          src={`http://localhost:1337${blog.data.attributes.image.data[0].attributes.formats.thumbnail.url}`}
        />
        <p><b>Content : </b>{blog.data.attributes.content}</p>
    </div>
  );
}
