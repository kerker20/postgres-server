const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
let pool = new Pool();
const port = process.env.PORT;

pool.connect();



//get all todos
app.get("/read", async (req,res) =>{
    try{
        const allLocations = await pool.query(
            "SELECT * FROM locations"
        );
        res.json(allLocations.rows);
    }catch (error){
        console.error(err.message);
    };
});

//get a todo
app.get('/get/:id', async (req, res)=> {
    const { id } = req.params;
    try{ 
        const location = await pool.query(`SELECT * FROM locations WHERE id = $1`, [id]);      
        res.json(location.rows[0]);
    }catch(error){
        console.log(error);
    };
});

// //create todo

app.post("/add", async (req,res) => {
    try {
        const { branchname, open, out, latitude, longitude, location, division } = req.body;
        const newLocation = await pool.query(
            "INSERT INTO locations (branchname, open, out, latitude, longitude, location, division) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [branchname, open, out, latitude, longitude, location, division]
        );
        res.json(newLocation.rows[0]);
    }catch (err) {
        console.error(err.message);
    }
})
//update todo
app.put("/update/:id", async(req,res) => {
    try{
        const { id } = req.params; //where
        const { branchname, open, out, latitude, longitude, location, division } = req.body; //set

        const updateLocation = await pool.query("UPDATE locations SET branchname=$1, open=$2, out=$3, latitude=$4, longitude=$5, location=$6, division=$7  WHERE id = $8", [branchname, open, out, latitude, longitude, location, division, id]);
        res.json("Location was updated!");

    }catch(error){
    console.log(error);
    }
})


//delete todo
app.delete("/delete/:id", async(req,res) => {
    try{
        const { id } = req.params;
        const deleteLocation = await pool.query("DELETE FROM locations WHERE id = $1", [id]);
        res.json("Todo was successfully deleted");
    }catch(error){
        console.log(error)
    }
})



app.listen(port, ()=> {
    console.log(`server started on ${port}`);
});