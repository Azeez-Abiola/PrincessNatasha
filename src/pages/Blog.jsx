import {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

function Blog(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState(false);
  const posts = [
    {id: 1, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-categoryImages-artificialIntelligence@2x.jpg', category: 'ARTIFICIAL INTELLIGENCE',  description: 'transformation? Explore articles about how AI impacts the cybersecurity workforce, ethics and machine learning and artificial intelligence security issues. Learn more about how security forces can benefit from the use of AI and strengthen their defenses.', link: 'https://securityintelligence.com/category/artificial-intelligence/'},
    {id: 2, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-categoryImages-networking@2x.jpg', category: 'Network', description: 'Network security is critical both at home and in the enterprise. It is pertinent to have a basic understanding of policies, processes and practices one can adopt to help prevent, detect and monitor unauthorized access and more. Read articles on network security, including network vulnerability', link: 'https://securityintelligence.com/category/network/'},
    {id: 3, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-catagory-applicationSecurity@2x.jpg', category: 'Application Security', description: 'What is the system development lifecycle for application security? What is the impact of cloud migration? How do you secure a mobile app? How do you identify and patch vulnerabilities in applications? What are the biggest threats to application security today? Read the latest articles...', link: 'https://securityintelligence.com/category/app-security/'},
    {id: 4, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-categoryImages-fraudProtection@2x.jpg', category: 'Fraud Protection', description: 'Keeping your identity safe is increasingly difficult in todays digital world. Whether its a mobile banking app, a SIM card, or an airline rewards program, ensure that personally identifiable information (PII) is safe from fraudsters. Read the latest articles on fraud protection, ranging from', link: 'https://securityintelligence.com/category/fraud-protection/'},
    {id: 5, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-catagory-healthcare-2@2x.jpg', category: 'Healthcare', description: 'Healthcare data breaches are more expensive than those in any other sector, according to the 2021 Cost of a Data Breach Report from IBM. Read the latest articles on cybersecurity in healthcare, including those about protecting patients personally identifiable information', link: 'https://securityintelligence.com/category/health-care-industry/'},
    {id: 6, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-categoryImages-endpoint@2x.jpg', category: 'Endpoint', description: 'People have so many devices in use at any given time, it has become increasingly difficult to ensure endpoint management and security. It is imperative to understand how devices are connected through various endpoints. Learn about the latest developments in endpoint security', link: 'https://securityintelligence.com/category/endpoint/'},
    {id: 7, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-catagory-government@2x.jpg', category: 'Government', description: 'The public sector saw a 78.7% increase in data breach costs in 2021, second only to the media industry (92.1%), according to the 2021 Cost of a Data Breach Report. The average time to identify and contain breaches across the board was reported at 287 days. Read state and local', link: 'https://securityintelligence.com/category/government/'},
    {id: 8, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-catagory-ciso@2x.jpg', category: 'CISO', description: 'The chief information security officer (CISO) has a lot on their plate. With so many risks in the digital world today, one needs to stay up on the current threats and solutions out there. Whether youre a cybersecurity professional or a CISO yourself, get the information you need and fast with articles on everything from workforce issues to cloud transformation to risk assessment and beyond.', link: 'https://securityintelligence.com/category/ciso-corner/'},
    {id: 9, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-catagory-incidentResponse@2x.jpg', category: 'Incident Response', description: 'When it comes to data breaches and cyber attacks, prevention is always preferable to remediation. So just how can organizations prevent these attacks? Learn how to be more proactive and identify vulnerabilities. Read the latest articles on developing and testing an...', link: 'https://securityintelligence.com/category/incident-response/'}
    ]
    
    const themeStyles = theme ? 'bg-black text-white' : 'bg-white text-black';
    
  return(
    <div className={`${themeStyles} min-h-screen`}>
     <section className="select-none">
    <Navbar />
      <div className="h-[500px] pt-20 px-4">
          <h2 className="text-center mt-3 text-[#44BBA4] text-5xl"> Welcome to <br /> <span className="italic">Stella Articles</span></h2>
          <p className="text-center mt-6">Here, creativity meets expertise to deliver engaging and insightful articles tailored to captivate you 🫵. Whether you're here for fresh perspectives, in-depth analysis, or practical tips, you're in the right place. Explore a world of compelling content designed to inform, inspire, and elevate your reading experience.</p>
        </div>
       <div>
          <h2 className="font-bold text-3xl text-center italic">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4">
            {posts.map((post) => (
              <article key={post.id} className="p-4 rounded">
                <img onContextMenu={(e) => e.preventDefault()} src={post.thumbnail} alt={post.category} className="w-full rounded mb-4"/>
                <p className="uppercase text-lg font-bold italic text-[#44BBA4]">{post.category}</p>
                <p>{post.description}</p>
                <a href={post.link} className="block w-30 bg-transparent border-2 border-[#44BBA4] px-4 py-2 rounded mt-7 text-center hover:bg-[#44BBA4]"> Read More </a>
              </article>
            ))}
          </div>
        </div>
        
     <div className="p-6">
      <h2 className="text-3xl text-center italic">Contact Us</h2>
     <form onSubmit={ async (e) => {
       e.preventDefault()
       try{
         const response = await fetch('https://api-princess-natasha.vercel.app/send_mail', {
         method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, 
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

     const result = await response.json();
      alert('Message sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    }
  }}>
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="rounded border-0 p-3 bg-gray-100 w-full mt-5" required/><br />
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" className="rounded border-0 p-3 bg-gray-100 w-full mt-5" required/><br/>
    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here.." className="rounded border-0 p-3 bg-gray-100 h-48 w-full mt-5" required></textarea>
    <button className={theme ? 'rounded text-lg mx-auto rounded px-3 py-2 text-center block w-full mt-3 text-white bg-[#44BBA4]' : 'rounded text-lg mx-auto rounded px-3 py-2 block mt-3 w-full text-center text-white bg-[#44BBA4]'} type="submit">Send Message</button>
    </form>
       </div>
     {/* Toggle Button */}
      <div
        onClick={() => setTheme((prev) => !prev)}
        className={`fixed bottom-2 right-4 flex items-center justify-between w-14 h-7 px-1 rounded-full cursor-pointer transition-all ${
          theme ? 'bg-gray-600' : 'bg-yellow-400'
        }`}
      >
        <div
          className={`absolute w-6 h-6 rounded-full bg-white shadow-lg transition-transform ${
            theme ? 'translate-x-6' : ''
          }`}
        />
        <FaSun
          className={`text-yellow-300 text-lg absolute left-1 transition-opacity ${
            theme ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <FaMoon
          className={`text-blue-400 text-lg absolute right-1 transition-opacity ${
            theme ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
       <Footer />
      </section>
    </div>
  )
}

export default Blog;
