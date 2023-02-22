
const Produto = ['a','b','c','d']

const index = async(req,res) => {
    const produtos = Produto
    res.status(200).json(produtos);
};

const create = async(req,res) => {
    try{
        const produto = Produto.append(req.body)
        res.status(201).json({
            produto,
            message: 'Produto criado com sucesso!'
        });
    }catch(e){
        console.log(e)
        res.status(500).send    ({error: e});
    }
};

const read = async(req,res) => {
    const {id} = req.params;
    try{
        const produto = Produto[id]
        res.status(200).json({produto});
    }catch(e){
        console.log(e);
        res.status(500).send({error: e});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    const produto = Produto[id]
    try{
        if(!produto)
            throw new Error('Produto não encontrado!');
       
        Produto[id] = req.body
        res.status(200).json({message:'Produto atualizado com sucesso!'});
    }catch(e){
        console.log(e);
        res.status(500).json({error: e});
    }
}; 

const remove = async(req,res) => {
    const {id} = req.params;
    const produto = Produto[id]
    try{
        if(!produto)
            throw new Error('Produto não encontrado!');

        Produto.splice(id, 1);
        res.status(200).json({produto_apagado,message:'Produto removido com sucesso!'});  

    }catch(e){
        console.log(e);
        res.status(500).json({error: e});
    }
};

export default { index, create, read, update, remove };