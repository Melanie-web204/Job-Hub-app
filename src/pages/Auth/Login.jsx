import React, { useState} from 'react';
import { motion } from 'framer-motion'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          
          <div className="text-center mb-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">
        Welcome Back</h2>
          <p className="text-gray-600">Sign in to your JobHub account</p>
          </div>
 
          

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border 
                    ${formState.error.email ? 'border-red-500' : 'border-gray-300'}  focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="Enter your email"/>

                  <div>
                  {formState.error.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formState.error.email}
                    </p>
                  )}
                  </div>

                  {/* Password */}
                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={formState.showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 rounded-lg border 
                        ${formState.error.password ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      onClick={() => setFormState(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                    >
                      {formState.showPassword ? <Eyeoff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formState.error.password && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formState.error.password}
                    </p>
                  )}
                  </div>

                  {/* Submit Error */}
                  {formState.error.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-red-700 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {formState.error.submit}
                      </p>
                    </div>
                  )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState.loading}
              className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {formState.loading ? (
                <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Signing in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                Create one here
                </a>
              </p>
              </div>



            </form>
            </motion.div>
          </div>
                 )
};




          


export default Login
