import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Portfolio, Contact, Resume,ProjectDetails } from './pages';
import {Header, Footer} from './components'

const App = () => {
  
    return (
        <div className="main">
            <Router>
            <Header />
                <Routes>
                    <Route 
                        path='/'
                        element={<About />}
                    />
                    <Route 
                        path='/Portfolio/'
                        element={<Portfolio />}
                    />
                    <Route 
                        path='/Contact/'
                        element={<Contact />}
                    />
                    <Route 
                        path='/Resume/'
                        element={<Resume />}
                    />
                    <Route 
                        path='/Project/:id'
                        element={<ProjectDetails />}
                    />
                    <Route 
                        path='*'
                        element={<About />}
                    />
                </Routes>
            </Router>
           
           <Footer />
        </div>
    )
}

export default App;