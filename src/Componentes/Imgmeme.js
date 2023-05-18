import React, {useState} from 'react';
import html2canvas from 'html2canvas';

const Imgmeme = () => {

    const [textomemesup, setTextomemesup] = useState();
    const [textomemeinf, setTextomemeinf] = useState();
    const [colorletrasup, setColorletrasup] = useState();
    const [colorletrainf, setColorletrainf] = useState();
    const [tamanoletrasup, setTamanoletrasup] = useState(32);
    const [tamanoletrainf, setTamanoletrainf] = useState(32);
    const [imgMeme, setImgMeme] = useState();

    const textmemesup = (e) =>{
        setTextomemesup(e.target.value);
        console.log(e.target.value);
    }

    const textmemeinf = (e) =>{
      setTextomemeinf(e.target.value);
      console.log(e.target.value);
    }

    const corletrasup = (e) =>{
      setColorletrasup(e.target.value);
      console.log(e.target.value);
    }

    const corletrainf = (e) =>{
      setColorletrainf(e.target.value);
      console.log(e.target.value);
    }

    const tamletrasup = (e) =>{
      setTamanoletrasup(e.target.value);
      console.log(e.target.value);
    }

    const tamletrainf = (e) =>{
      setTamanoletrainf(e.target.value);
      console.log(e.target.value);
    }

    const seleccionarImg = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = () => {
          setImgMeme(reader.result);
        }

        if (file) {
          reader.readAsDataURL(file);
        }
    }

    const descarga = (e) => {
      html2canvas(document.querySelector("#exportar")).then(function(canvas) {
        let img = canvas.toDataURL("memesImg/png");
        let link = document.createElement("a");
        link.download = "memepropio.png";
        link.href = img;
        link.click();
    });
    }

  return (
    <div className='d-flex flex-column'>

      <div>
        <h1 className='mt-2'>Creador de memes</h1>
      </div>

      <div className='d-flex border border-2 border-warning'>
        <div className='d-flex flex-column justify-content-evenly w-50 border border-2 border-warning'>

          <div className='d-flex ms-2'>
            <div>
              <h3>Sube imagen para tu meme: </h3>
            </div>

            <div>
              <input onChange={seleccionarImg} className="form-control w-50 d-block ms-2" accept='.png, .jpg, .jpeg'  type="file"/>
            </div>
          </div>
      
          <div className='d-flex justify-content-evenly'>
            <div>
              <h3>Frase superior:</h3>
            </div>
            
            <div>
              <input onChange={textmemesup} className="form-control d-block" type="text" placeholder="Pone tu frase" name="meme"/>
            </div>

            <div>
              <h3>Color: </h3>
            </div>

            <div>
              <input onChange={corletrasup} defaultValue={"#FF7B00"} className="w-15 d-block" type="color" placeholder="Pone tu frase" name="meme"/>
            </div>

            <div>
              <h3>Tamaño letra: </h3>
            </div>

            <div>
              <input onChange={tamletrasup} defaultValue={32} className="d-block w-25" type="number" name="meme"/>
            </div>
          </div>

          <div className='d-flex justify-content-evenly'>
            <div>
              <h3>Frase inferior: </h3>
            </div>
            
            <div>
              <input onChange={textmemeinf} className="form-control d-block" type="text" placeholder="Pone tu frase" name="meme"/>
            </div>

            <div>
              <h3>Color: </h3>
            </div>

            <div>
              <input onChange={corletrainf} defaultValue={"#FF7B00"} className="w-15 d-block" type="color" placeholder="Pone tu frase" name="meme"/>
            </div>

            <div>
              <h3>Tamaño letra: </h3>
            </div>

            <div>
              <input onChange={tamletrainf} defaultValue={32} className="d-block w-25" type="number" name="meme"/>
            </div>
          </div>

        </div>

        <div className='d-flex flex-column align-items-center w-50 pt-5 border border-2 border-warning'>
          <figure className='d-flex justify-content-center' id='exportar'>
            <p className='position-absolute' style={{color: `${colorletrasup}`, fontSize: `${tamanoletrasup}px`}}>{textomemesup}</p>
            <p className='position-absolute align-self-end' style={{color: `${colorletrainf}`, fontSize: `${tamanoletrainf}px`}}>{textomemeinf}</p>
            <img src={imgMeme} style={{height: 500, width: 500}} alt=''/>
            
          </figure>

          <button onClick={descarga} type='button' className='btn btn-warning w-25 my-3 m-auto'>Descargar meme</button>
        </div>
      </div>             
       
    </div>
  )
}

export default Imgmeme;
