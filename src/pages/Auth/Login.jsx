import { motion } from 'framer-motion'
import {
  Mail,
  Lock,
  Eye,
  Eyeoff,
  Loader,
  AlertCircle,
  CheckCircle,
} from 'lucide-react'


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formState, setFormState] = useState({
    loading: false,
    error: {},
    showPassword: false,
    success: false,
  });

  // Validation functions
  const validateEmail = (email) => {

  };

  const validatePassword = (password) => {

  };
  
  // Handle input changes
  const handleInputChange = (e) => {

  };

  const validateForm = () => {

  };

  const handleSubmit = async (e) => {

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      ><h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Welcome Back</h2>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Welcome Back
          <p className="">Sign in to your JobHub account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="">
                Email Address
              </label>

          </p>

};

export default Login
