import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <Card className="p-4">
            <CardHeader>
              <h3 className="text-xl font-semibold">Contact Us</h3>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Ubuntu Backpackers</p>
              <p className="mb-2">123 Main Street, Mutare, Zimbabwe</p>
              <p className="mb-2">+263 777 227 744</p>
              <p className="mb-2">info@ubuntubackpackers.com</p>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="p-4">
            <CardHeader>
              <h3 className="text-xl font-semibold">Quick Links</h3>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <a href="#rooms" className="hover:text-gray-400">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#explore" className="hover:text-gray-400">
                    Explore
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card className="p-4">
            <CardHeader>
              <h3 className="text-xl font-semibold">Follow Us</h3>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl hover:text-blue-600" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:text-pink-600" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl hover:text-blue-700" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Subscription */}
          <Card className="p-4">
            <CardHeader>
              <h3 className="text-xl font-semibold">
                Subscribe to Our Newsletter
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Stay updated with our latest news, special offers, and more!
              </p>
              <form action="#" method="POST" className="flex space-x-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
                <Button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ubuntu Backpackers. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
