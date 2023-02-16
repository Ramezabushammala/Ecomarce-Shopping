import React from 'react'

function Footer() {
  return (
    <footer className="footer text-gray-300 bg-first p-10 grid grid-cols-1 grid-flow-row  justify-items-center md:justify-items-start md:grid-cols-2 lg:grid-cols-4">
  <div className='col-flex'>
    <span className="footer-title ">Links</span> 
    <a href='/' className="link link-hover">About Us</a> 
    <a href='/' className="link link-hover">Contact Us</a> 
    <a href='/' className="link link-hover">Blog</a> 
    <a href='/' className="link link-hover">FAQ's</a>
  </div> 
  <div className='col-flex'>
    <span className="footer-title">Policies</span> 
    <a href='/' className="link link-hover">Terms & Conditions</a> 
    <a href='/' className="link link-hover">Cookies Policy</a> 
    <a href='/' className="link link-hover">Data Policy</a> 
    
  </div> 
  <div className='col-flex'>
    <span className="footer-title">About Shopping Hub</span> 
    <a href='/' className="link link-hover">Company Info</a> 
    <a href='/' className="link link-hover">Branches</a> 
    <a href='/' className="link link-hover">Store</a>
  </div>
  <div className='col-flex'>
    <span className="footer-title">Contact</span> 
    <a href='/' className="link link-hover">+678 004 5754</a> 
    <a href='/' className="link link-hover">info@shophub.com</a> 
    
  </div>
</footer> 
  )
}

export default Footer