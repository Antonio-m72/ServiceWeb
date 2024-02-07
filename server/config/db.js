import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Evergreen:6cLT8eWse3kkkC8n@cluster0.2dizvgu.mongodb.net/laundry-system?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Terminar el proceso con error
  }
};

export default mongoose;
