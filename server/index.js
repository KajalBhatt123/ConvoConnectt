const { Server } = require("socket.io");  // Import the Socket.io library

const io = new Server(8000, {  // Create a new Socket.io server listening on port 8000
  cors: true,  // Enable Cross-Origin Resource Sharing (CORS) to allow requests from other origins
});

const emailToSocketIdMap = new Map();  // Create a map to associate email addresses with socket IDs
const socketidToEmailMap = new Map();  // Create a map to associate socket IDs with email addresses

io.on("connection", (socket) => {  // Set up an event listener for new socket connections
  console.log(`Socket Connected`, socket.id);  // Log the ID of the connected socket

  socket.on("room:join", (data) => {  // Set up an event listener for the "room:join" event
    const { email, room } = data;  // Extract email and room information from the event data
    emailToSocketIdMap.set(email, socket.id);  // Map the email address to the socket ID
    socketidToEmailMap.set(socket.id, email);  // Map the socket ID to the email address
    io.to(room).emit("user:joined", { email, id: socket.id });  // Notify others in the room that a user has joined
    socket.join(room);  // Add the socket to the specified room
    io.to(socket.id).emit("room:join", data);  // Send a confirmation to the user that they have joined the room
  });

  socket.on("user:call", ({ to, offer }) => {  // Set up an event listener for the "user:call" event
    io.to(to).emit("incomming:call", { from: socket.id, offer });  // Notify the recipient of the incoming call
  });

  socket.on("call:accepted", ({ to, ans }) => {  // Set up an event listener for the "call:accepted" event
    io.to(to).emit("call:accepted", { from: socket.id, ans });  // Notify the caller that their call has been accepted
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {  // Set up an event listener for the "peer:nego:needed" event
    console.log("peer:nego:needed", offer);  // Log the peer negotiation offer
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });  // Notify the recipient of the peer negotiation offer
  });

  socket.on("peer:nego:done", ({ to, ans }) => {  // Set up an event listener for the "peer:nego:done" event
    console.log("peer:nego:done", ans);  // Log the peer negotiation answer
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });  // Notify the recipient of the final peer negotiation answer
  });
});
