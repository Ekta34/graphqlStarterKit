import db from './lib/db-connector';

async function getUsers () {
    console.log(db)
    console.log('getusers');
    let response;

    try{
      //const result =  await pool.query('SELECT * FROM public."userDetails"');
      const result = await db.select().table('userDetails');
      
      response =  result;

    }catch(e){
      console.log(e);
      response = {
        isSuccess:false,
        message:"something went wrong!!"
      }  
    }
    console.log(response);
    return response;
}

let resolvers = {

    Query : {
        feed: () => {
            return getUsers()
          }
    },
    User: {
        id: (root) => root.id,
        firstName: (root) => root.firstName,
        lastName: (root) => root.lastName
    }

}

export default resolvers