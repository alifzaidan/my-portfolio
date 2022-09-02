import { useEffect } from 'react';
import NextLink from './NextLink';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="mb-10">
          <h1 className="title">Contact Me.</h1>
          <p className="paragraph">
            Get in touch or shoot me an email directly on{' '}
            <a href="mailto:muchammadalifzaidan@gmail.com" rel="noopener noreferrer" target="_blank" className="font-bold hover:text-black dark:hover:text-focus">
              muchammadalifzaidan@gmail.com
            </a>
          </p>
        </div>
        <form className="mb-10 flex flex-col gap-6" action="https://getform.io/f/e1f9e480-d31b-43b4-834f-3f99f625f49f" method="POST">
          <input type="text" placeholder="Name" className="input-form" />
          <input type="email" name="email" id="email" placeholder="Email" className="input-form" />
          <textarea name="message" id="message" placeholder="Message" className="input-form h-48"></textarea>
          <button className="button-form">Send Message</button>
        </form>
        <div className="mb-24 md:mb-0">
          <NextLink link="/" description="Go Back Home" />
        </div>
      </div>
      <div>
        <h1 className="bg-text text-h">Contact Me.</h1>
      </div>
    </section>
  );
};

export default Contact;
