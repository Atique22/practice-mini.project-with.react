import React, { Component } from 'react';
import BlogItem from './Blog_item';
// import PropTypes from 'prop-types';


class Blogs extends Component {
    render() {
        return (
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {/* blogs item here */}
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


// Blogs.propTypes = {

// };


export default Blogs;
