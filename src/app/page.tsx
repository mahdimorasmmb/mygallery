import Link from "next/link";

const mockeUrl = [
  'https://utfs.io/f/771c422c-aa6a-4b5a-a95f-058cf25b9ba2-efiov7.jpg',
  'https://utfs.io/f/7c221082-b0a2-445a-b36e-17c507257e87-cql5i.jpg',
  'https://utfs.io/f/5c093173-3cad-4e43-b45c-db2ef18f4c81-9nbazl.jpg',
  'https://utfs.io/f/2c9edc07-e4eb-4894-8cb2-184c0675d992-vpnnor.jpg'

]

const mockImages = mockeUrl.map((url,index)=> ({id: index +1,url}))

export default function HomePage() {
  return (
   <main>
    <div className="flex flex-wrap gap-4">
      {
        [...mockImages,...mockImages,...mockImages].map(({id, url}) => (
          <div key={id} className="w-48">
            <img src={url} alt="" />
          </div>
        ))
      }
    </div>
   </main>
  );
}
