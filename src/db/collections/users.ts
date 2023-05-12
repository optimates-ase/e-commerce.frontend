import db from '$db/mongo'
import type { User } from '$lib/types'

export const userCollection = db.collection("users")

export const createUser = async (user:User) => {
    let result;
    try{
        result = await userCollection.insertOne(user);
        console.log(`${user.firstName} ${user.lastName} created with _id: ${result.insertedId}`)
    } catch (error:any){
        console.log("ERROR:", error);
    }
    return String(result?.insertedId)
}

export const getUserIdByMail = async (mail:string)  => {
    let result;

    try{
        result = (await userCollection.find({email: mail}).toArray()).map((usr) => {
            return usr;
        })[0];
    } catch (error:any){
        console.log("ERROR:", error);
    }
    return result;

}

