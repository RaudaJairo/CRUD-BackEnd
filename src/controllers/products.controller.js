const getConnection = require('../database');

class ProductsController {

    // GET

    static getProducts = async (req, res) => {
        try {
            const db = await getConnection();
            const query = await db.query("SELECT * FROM products");

            res.status(200).json(query[0]);
            db.close();
        } catch (e) {
            console.error(e);
            res.status(500).json([]);
        }
    }

    static getProductById = async (req, res) => {
        let db;
        try {
            db = await getConnection();
            const { id } = req.params;

            const query = await db.execute("SELECT * FROM products WHERE id = ? LIMIT 1", [id]);
            const product = query[0][0];

            if(!product) {
                return res.status(404).json({});
            }

            res.status(200).json(product);
        } catch (e) {
            console.error(e);
            res.status(500).json({});
        } finally {
            if( db ){
                db.close();
            }
        }
    }

    // POST

    static newProduct = async (req, res) => {
        let db;
        try {

            const { name, price, description } = req.body;

            if ( !(name || price || description) ) {
                return res.status(300).json({
                    message: "Incomplete data"
                });
            }
            db = await getConnection();

            const query = await db.execute("INSERT INTO products VALUE (default, ?, ?, ?)", [ name, price, description ]);

            res.status(201).json({
                isOk: true
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({});
        } finally {
            if( db ){
                db.close();
            }
        }
    }

    // DELETE

    static deleteProduct = async (req, res) => {
        let db;
        try {
            const { id } = req.params;
            db = await getConnection();
            const query = await db.execute("DELETE FROM products WHERE id = ?", [id]);

            res.end();
        } catch (e) {
            console.error(e);
            res.status(500).json({});
        } finally {
            if( db ){
                db.close();
            }
        }
    }

}

module.exports = ProductsController;
