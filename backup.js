// const express = require('express');

// const { Pool } = require('pg');
// const app = express();
// require('dotenv').config();

// app.use(express.json());

// let pool = new Pool();
// const port = process.env.PORT;

// pool.connect();



// //get all todos
// app.get("/allLocations", async (req,res) =>{
//     try{
//         const allTodos = await pool.query(
//             "SELECT * FROM locations"
//         );
//         res.json(allTodos.rows);
//     }catch (error){
//         console.error(err.message);
//     };
// });

// //get a todo
// app.get('/getSpecific/:id', async (req, res)=> {
//     const { id } = req.params;
//     try{ 
//         const todo = await pool.query(`SELECT * FROM locations WHERE id = $1`, [id]);      
//         res.json(todo.rows[0]);
//     }catch(error){
//         console.log(error);
//     };
// });

// // //create todo

// app.post("/addLocation", async (req,res) => {
//     try {
//         const { branchName, time_in, time_out, latitude, longitude, location, division } = req.body;
//         const newLocation = await pool.query(
//             "INSERT INTO locations (branchName, time_in, time_out, latitude, longitude, location, division) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [branchName, time_in, time_out, latitude, longitude, location, division]
//         );
//         res.json(newLocation.rows[0]);
//     }catch (err) {
//         console.error(err.message);
//     }
// })
// //update todo
// app.put("/update/:id", async(req,res) => {
//     try{
//         const { id } = req.params; //where
//         const { branchName, time_in, time_out, latitude, longitude, location, division } = req.body; //set

//         const updateLocation = await pool.query("UPDATE locations SET branchName=$1, time_in=$2, time_out=$3, latitude=$4, longitude=$5, location=$6, division=$7  WHERE id = $8", [branchName, time_in, time_out, latitude, longitude, location, division, id]);
//         res.json("TODO was updated!");

//     }catch(error){
//     console.log(error);
//     }
// })


// //delete todo
// app.delete("/delete/:id", async(req,res) => {
//     try{
//         const { id } = req.params;
//         const deleteLocation = await pool.query("DELETE FROM locations WHERE id = $1", [id]);
//         res.json("Todo was successfully deleted");
//     }catch(error){
//         console.log(error)
//     }
// })



// app.listen(port, ()=> {
//     console.log(`server started on ${port}`);
// });