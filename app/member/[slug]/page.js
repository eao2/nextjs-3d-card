import Card from '../../components/Card.js'

export default function page({params}){
    return (
        <>
            <Card fileName={params.slug}/>
        </>
    )
}