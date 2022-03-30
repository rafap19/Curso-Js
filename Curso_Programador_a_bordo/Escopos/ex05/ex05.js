/* usamos o escopo de bloco que é utilizado para declarar ifs por exemplo,para esse usamos o let e não o var,isso porque o var respeita apenas o bloco de uma function,logo se queremos algo reservado o var não vai servir,visto que ele deixa como global a var,por isso usamos o let  */

if (true) {
    var youtube = 'Rafael';
    let autor = 'Rafael';
    console.log(youtube);
    console.log(autor);
}
    console.log(youtube)

    /*Se tentarmos imprimir:
    console.log(autor);
    
    por termos usado o let o valor não é reconhecido,diferente do var como exemplificado no caso do youtube.
    */


