import "dotenv/config.js"
import '../../config/database.js'
import User from '../User.js'

const users = [
    {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      password: "contraseña123",
      photo: "https://example.com/photos/juan.jpg",
      role: 1
    },
    {
      name: "María García",
      email: "maria.garcia@example.com",
      password: "segura456",
      photo: "https://example.com/photos/maria.jpg",
      role: 2
    },
    {
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@example.com",
      password: "clave789",
      photo: "https://example.com/photos/carlos.jpg",
      role: 1
    },
    {
      name: "Ana Martínez",
      email: "ana.martinez@example.com",
      password: "anapass123",
      photo: "https://example.com/photos/ana.jpg",
      role: 3
    },
    {
      name: "Luis González",
      email: "luis.gonzalez@example.com",
      password: "luispass456",
      photo: "https://example.com/photos/luis.jpg",
      role: 2
    },
    {
      name: "Sofía López",
      email: "sofia.lopez@example.com",
      password: "sofia789",
      photo: "https://example.com/photos/sofia.jpg",
      role: 1
    },
    {
      name: "Pedro Sánchez",
      email: "pedro.sanchez@example.com",
      password: "pedropass123",
      photo: "https://example.com/photos/pedro.jpg",
      role: 2
    },
    {
      name: "Laura Fernández",
      email: "laura.fernandez@example.com",
      password: "laurapass456",
      photo: "https://example.com/photos/laura.jpg",
      role: 3
    },
    {
      name: "Miguel Torres",
      email: "miguel.torres@example.com",
      password: "miguelpass789",
      photo: "https://example.com/photos/miguel.jpg",
      role: 1
    },
    {
      name: "Isabel Ramírez",
      email: "isabel.ramirez@example.com",
      password: "isabelpass123",
      photo: "https://example.com/photos/isabel.jpg",
      role: 2
    }
  ];


  User.insertMany(users)