import Card from '../components/Card.js'

export default function page({params}){
    return (
        <>
            {/* <h1>
                {params.slug}
            </h1> */}
            <Card fileName={params.slug}/>
        </>
    )
}