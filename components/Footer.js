import React, {Component} from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
      const current_year = new Date().getFullYear();
      return (
        <div id="section_footer">
          <div className='text-center py-4'>
            <Link href="https://meziszem.netlify.app/" target="_blank" className='btn btn-link'>
              Portfolio
            </Link>
            <span>|</span>
            <Link href="https://meziszem.blogspot.com/" target="_blank" className='btn btn-link'>
              Video Blog
            </Link>
            <span>|</span>
            <Link href="<mailto:meseretfh@gmail.com>" className='btn btn-link'>
              Contact
            </Link>
            <p>Copyright © {current_year}, mez. All Rights Reserved.</p>
          </div>
        </div>
      );
    }
  }

  export default Footer;