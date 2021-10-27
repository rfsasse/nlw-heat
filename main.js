const LinksSocialMedia = {
  github: 'rfsasse',
  youtube: 'ruansasse',
  facebook: 'ruan.sasse',
  instagram: 'sasseruan',
  twitter: 'ruansasse'
}

function changeSocialMediaLinks() {
  /*
   document.getElementById('userName').textContent = 'Olivia'
   éssa seria a função padrão
   /*

   /*
   userName.textContent = 'Marcelo'

   usando o Id não precisa  qualquer palavra.textContent ele já intende que esta falando de um id no html*/

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    //itera o socialLinks a ul pega os filhos e joga pra li   li pega os atributes classe e atribui para social ,
    //li itera pelos filhos do li passando o valor 0 primeiro filho . href e atribui pra ele a string contendo o link,
    //precisa utilizar as crazes o nome da rede solcial troca pelo social que esta pegando a classe do primeiro filho de li que esta com o nome exato da rede
    //na segunda parte ele  pega a variavel const global com os nome do usuarios nasrede sociais
    //utilizando variavel+colchetes e dentro o nome social ele vai substituir oque tiver dentro do colchete por texto de codigo
    // e vai ficar linksSocialMedia.github por exemplo e ira retornar  rfsasse

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //informar qual dos filhos quer pegar
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

//api

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //fetch bate na api e pega a respota e tras devolta
  //.then é a promisse se o fetch conseguio pegar a respota o promisse recebe ela
  //arrow function quando so faz uma coisa não precisa de chaves response => { response.json() })  então fica response => response.json())
  //quando o response recebe ele guarda num objetão e é passado o .json() essa função converte pra formato json
  //com + um then agora a variavel data ira receber efetivamente o json
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //userName é o id do elemento da dom  .textContent função que altera o texto da dom = recebe a variae
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userFoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
