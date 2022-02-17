import Layout from '../components/Layout'
import Error from './_error'

const Github = ({ user, statusCode }) => {

    if(statusCode){
        return <Error/>
    }

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5 mb-5">
                    <div className="card card-body text-center">
                        <h4 className="m-4">{user.name}</h4>
                        <img src={user.avatar_url} alt="user_name"></img>
                        <br></br>
                        <p>{user.bio}</p>
                        <a className="btn btn-info mb-3" href={user.html_url}>Github</a>
                        <a className="btn btn-info" href={user.blog}>Portfolio</a>
                        
                    </div>
                </div>
            </div>            
        </Layout>

    )
}





//await = asincrono async
export async function getServerSideProps() {

    const res = await fetch('https://api.github.com/users/francorvalant')
    const data = await res.json();
    

    const statusCode = res.status > 200 ? res.status : false;



    return {
        props: {
            user: data,
            statusCode
        }

        
    }
}




export default Github;
