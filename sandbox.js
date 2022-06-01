<article>
        <ul className='categ'>
          {category.map(({title, postImage}, index) => (
            <li className='categ-item'>
              <a 
                data-src={urlFor(postImage).url()} 
                data-caption="A Toyota Previa covered in graffiti"
                onClick={ () => setToggler(!toggler) }
                >
                <img
                  key={index}
                  src={urlFor(postImage).url()}
                  alt={title}
                  loading="lazy"
                />
              </a>
              <FsLightbox
                toggler={ toggler }
                sources={ [
                  urlFor(postImage).url()
                ] }
              />
            </li>
          ))}
          <li></li>
        </ul>
      </article>