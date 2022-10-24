const dadosPlantas = [
  {
    codigo: "1",
    nome: "Ipê",
    nomeCientifico: "Handroanthus albus",
    dataPlantio: "23/09/1991",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_919225-MLB25414550800_032017-W.jpg"
  },
  {
    codigo: "2",
    nome: "Cerejeira",
    nomeCientifico: "Prunus subg. Cerasus",
    dataPlantio: "23/09/1991",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_912828-MLB28347358604_102018-O.jpg"
  },
  {
    codigo: "3",
    nome: "Aracauria",
    nomeCientifico: "Araucaria angustifolia",
    dataPlantio: "23/09/1991",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7qSqSGuf5gZzh67ZR5Q9b_qOiJwmRUXUCQ&usqp=CAU"
  },
  {
    nome: "Jabuticaba",
    nomeCientifico: "Plinia cauliflora",
    dataPlantio: "23/09/1991",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_743851-MLB49425248905_032022-O.webp"
  },
  {
    nome: "Pitanga",
    nomeCientifico: "Eugenia uniflora",
    dataPlantio: "23/09/1991",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWP1gIS0S5sDjTwHU2Vf1u9YnRMRltTdcz0A&usqp=CAU"
  }
  ,
  {
    nome: "Girassol",
    nomeCientifico: "Girassol uniflora",
    dataPlantio: "23/09/1991",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAv3KzNJE8rX8eAL6f4QM53TNupuHdni8OQ&usqp=CAU"
  }
  ,
  {
    nome: "Caribe Flor",
    nomeCientifico: "Caribe uniflora",
    dataPlantio: "23/09/1991",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBi3CpoQ4AW6S3Ejk_RKuoO6hKXHVsozQuaQ&usqp=CAU"
  }
  ,
  {
    nome: "Campanula",
    nomeCientifico: "Eugenia uniflora",
    dataPlantio: "23/09/1991",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbLBU4kkEGvgzBboFuzHhCnv_4sqr7XCTHQ&usqp=CAU"
  }
]

class DadosPlantas {
  static async getPlantas() {
      return dadosPlantas;
  }
}
export default DadosPlantas;