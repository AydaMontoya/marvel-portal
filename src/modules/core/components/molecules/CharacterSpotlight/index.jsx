import React from 'react';
import './styles.scss';

export default function CharacterSpotlight() {
  return (
    <section>
      <div className="container-principal-comics">
        <div className="container-name-comics">
          <h1>CHARACTERS SPOTLIGHT</h1>
        </div>
        <div className="container-grid-comics">
          <div>
            <div>
              <img
                className="image-comics"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/shuri_bp_card_image.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="container-text-comics">COMICS</p>
              <a className="link-comics" href="#">
                Aqui va el titulo
              </a>
            </div>
          </div>
          <div>
            <div>
              <img
                className="image-comics"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/namor_card_image.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="container-text-comics">COMICS</p>
              <a className="link-comics" href="#">
                Aqui va el titulo
              </a>
            </div>
          </div>
          <div>
            <div>
              <img
                className="image-comics"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/scott_cassie_card_image_copy.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="container-text-comics">COMICS</p>
              <a className="link-comics" href="#">
                Aqui va el titulo
              </a>
            </div>
          </div>
          <div>
            <div>
              <img
                className="image-comics"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/_silk_card.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="container-text-comics">COMICS</p>
              <a className="link-comics" href="#">
                Aqui va el titulo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
