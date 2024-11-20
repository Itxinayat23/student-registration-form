app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
  
    // Validate input
    if (!username || !password || !email) {
      return res.status(400).send('Username, password, and email are required');
    }
  
    try {
      // Check for existing user with the same email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('Email already in use');
      }
  
      const newUser = new User({ username, password, email });
      await newUser.save();
      res.status(201).send('User registered successfully');
    } catch (error) {
      res.status(400).send('Error registering user: ' + error.message);
    }
  });
  

  