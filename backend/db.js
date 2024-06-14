import { connect } from "mongoose";

const connection = connect(process.env.MONGO_URL);

export default connection;
