let titles = ['pequeno principe', 'ultra-aprendizado', 'pé de laranja lima']
let languages = [['português', 'inglês'], ['espanhol', 'russo'], 'inglês']
let authors = ['maria', 'marco', 'abraham']
let years = [2011, 2003, 2018]

function makeAction(){
    const askAction = prompt('Diga o que quer fazer:\nBuscar livros de um autor.\nBuscar livros de um ano.\nBuscar livros de um autor a partir de determinado ano.\nBuscar os livros de determinado idioma.\nBuscar informações de um livro pelo seu nome.\nExibir os livros ordenados pelo ano.')
    switch (askAction) {
        case 'Buscar livros de um autor':
            const author = prompt('Diga o nome do autor')
            titlesForAuthor(author)
            break;
        case 'Buscar livros de um ano':
            const year = parseInt(prompt('Diga o ano para buscar os livros'))
            titlesForYear(year)
            break;
        case 'Buscar livros de um autor a partir de determinado ano':
            const author2 = prompt('Diga o nome do autor')
            const year2 = parseInt(prompt('Diga o ano'))
            titlesForAuthorYear(author2, year2)
            break;
        case 'Buscar os livros de determinado idioma':
            const language = prompt('Diga o idioma para buscar')
            titlesForLanguage(language)
            break;
        case 'Buscar informações de um livro pelo seu nome':
            const titleBook = prompt('Diga o nome do livro')
            infoForTitle(titleBook)
            break;
        case 'Exibir os livros ordenados pelo ano':
            showForYear()
            break;
        default:
            alert('Não posso fazer isso')
            makeAction()
            break;
    }
}
makeAction()

function titlesForAuthor(nameAuthor){
    if( !(authors.includes(nameAuthor)) ) {
        alert('Esse autor não está cadastrado!')
        makeAction()
    }
    let books = []
        for (let i = 0; i < authors.length; i++) {
            if(authors[i] === nameAuthor)
            books.push(titles[i])
        }
    return books
}

function titlesForYear(year){
    if( !(years.includes(year)) ){
        alert('Não há livros com esse ano')
        makeAction()
    }
    let books = []
    for (let i = 0; i < years.length; i++) {
        if(years[i] === year){
            books.push(titles[i])
        }
    }
    return books
}

function titlesForAuthorYear(nameAuthor, year){
    if( !(authors.includes(nameAuthor)) ) {
        alert('Não há autor com esse nome')
        makeAction()
    } 
    let books = []
    for (let i = 0; i < years.length; i++) {
        if(nameAuthor === authors[i] && years[i] >= year){
            books.push(titles[i])
        }
    }
    return books
}

function titlesForLanguage(language){
    let books = []
    for (let i = 0; i < languages.length; i++) {
        for (let j = 0; j < languages.length; j++) {
            if(languages[i] === language || languages[i][j] === language) {
                if(books.includes(titles[i])) break;
                books.push(titles[i])
            }
        }
    }
    return books
}

function infoForTitle(title){
    if( !(titles.includes(title)) ) {
        alert('Não há livro com esse nome')
        makeAction()
    }
    for (let i = 0; i < titles.length; i++) {
        if(titles[i] === title){
            return `Livro: ${titles[i]}, Autor: ${authors[i]}, Idiomas(s): ${languages[i]}, Ano: ${years[i]}`
        }
    }
}

function showForYear(){
    let biggestYear = 0
    let mediumYear = 0
    let smallYear = 0

    for (let i = 0; i < years.length; i++) {
        if(years[i] > biggestYear) {
            biggestYear = years[i]
        }
    }

    for (let j = 0; j < years.length; j++) {
        if(years[j] > mediumYear && years[j] < biggestYear) {
            mediumYear = years[j]
        }
    }
    
    for (let k = 0; k < years.length; k++) {
        if(years[k] > smallYear && years[k] < mediumYear) {
            smallYear = years[k]
        }
    }

    let yearsOrdered = [biggestYear, mediumYear, smallYear]
    let titlesOrdered = []
    let authorsOrdered = []
    let languagesOrdered = []

    for (let l = 0; l < yearsOrdered.length; l++) {
        for (let m = 0; m < yearsOrdered.length; m++) {
            if(years[m] === yearsOrdered[l]) {
                titlesOrdered[l] = titles[m]
                authorsOrdered[l] = authors[m]
                languagesOrdered[l] = languages[m]
            }
        }
    }

    for (let m = 0; m < yearsOrdered.length; m++) {
        console.log(`Livro: ${titlesOrdered[m]}, Autor: ${authorsOrdered[m]}, Idiomas: ${languagesOrdered[m]}, Ano: ${yearsOrdered[m]}`)
    }
}