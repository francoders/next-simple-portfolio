import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import {skills, projects} from '../profile'
import Script from 'next/script'

const Index = () => (
  <Layout>
    {/* Header card */}
    <header className="row mt-4">
      <div className="col-md-12">
        <div className="card card-body bg-light">
          <div className="row">
            <div className="col-md-4">
              <Image
                src="/img-francisco.jpg"
                className="img-fluid"
                alt="img"
                width={500}
                height={600} />
            </div>
            <div className="col-md-8">
              <h2>Francisco Corvalán</h2>
              <h6>Front End Developer</h6>
              <br />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a className='btn btn-info' href="/hirene">redireccion</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card bg-light h-100">
          <div className="card-body">
            <h4>Skills</h4>

            {
              skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h6>{skill}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card bg-light h-100">
          <div className="card-body">
            <h4>Experience</h4>

            <ul>
              <li>
                <h5>Asesoria y Proyectos MB20</h5>
                <h6>Practica Profesional 3 Meses</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.</p>
              </li>
              <li>
                <h5>Asesoria y Proyectos MB20</h5>
                <h6>Practica Profesional 3 Meses</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </li>
            </ul>
            <Link href='/experiences'>
            <a className="btn btn-info">Conoce más</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div className="row">
      <div className="col-md-12 mt-5">
        <div className="card card-body bg-info">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-dark">Portfolio</h1>
            </div>

            {
              projects.map(({name,description,image}, i) => (
                <div className="col-md-4 p-3" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                    <img src={`/${image}`} className="card-img-top" alt="img1"></img>
                    </div>
                    <div className="card-body">
                      <h5>{name}</h5>   
                      <p>{description}</p>
                      <a href="#!">Know more</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="col-md-12 m-2">
            <div className="text-center">
              <Link href="/portfolio">
                <a className="btn btn-outline-light">More proyect</a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></Script>
  </Layout>

)

export default Index;