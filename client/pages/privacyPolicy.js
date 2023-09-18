import HomeLayout from '../components/HomeLayout';
import Link from "next/link";

export default function PrivacyPolicy() {

    const title = "Lighthouse Arab World"
    const subtitle = "Your privacy matters to us."
    const pp1 = 'Our privacy policy describes the current policies and practices regarding personal data collected by Lighthouse Media NA Inc dba Lighthouse Arab World. The term "personal data" refers to personally identifiable information like your name, e-mail address, mailing address, donor personal information, etc. Information we collect will not be released by any individual or entity other than Lighthouse Arab World. This includes, for example, requests for other services or when you send us your comments or requests for information.'
    const pp2 = 'Unless we have your permission or are otherwise required by law to release the personal data provided by you, it will be shared only with other entities of Lighthouse Arab World to enable us to contact you regarding updates, newsletters, or mission opportunities. We and others with whom we share your personal data may retain it on file to better serve you. Any destruction of personal data will be done in a manner consistent with the intent of the privacy policy.  This policy applies to both online and offline donations.'
    const pp3 = "TYPES OF PERSONAL DATA"
    const pp4 = 'We collect contact, payment, and demographic information about those who give to Lighthouse Arab World through online giving forms, online surveys, and direct mail gift processing. We also use secure online tools and other third-party data sources to verify addresses and collect public personal contact and demographic information. PCI (Payment Card Industry)-compliant encryption is utilized to protect personal data.'
    const pp5 = "PRIMARY PURPOSE FOR COLLECTION AND USE OF PERSONAL DATA"
    const pp6 = 'We use contact and payment information to process gifts. We also use this information for our legitimate interest in updating you about how your gift has been used. We also may alert you to other ways to engage with our ministry, including giving and job opportunities.'
    const pp7 = 'Occasionally we may use other information to learn about donors and sponsors to identify other individuals who may be interested in enabling Lighthouse Arab World to execute its mission in the Middle East and North Africa. This may include sharing anonymized data with cooperative database providers.'
    const pp8 = 'You can change your preferences at any time by contacting us using the methods mentioned in the section below, “Opt-Out & Updating Your Information.”'
    const pp9 = 'GOOGLE ANALYTICS'
    const pp10 = 'We use a tool called “Google Analytics” to collect information about the use of this site at https://lighthouseaw.org. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, interactions and engagements with page functions, and what other sites they used prior to coming to this site. We use the information provided by Google Analytics only to improve this site. Google Analytics collects only the IP address assigned to you on the date you visit this site, rather than your name or other identifying information. We do not combine the information collected through the use of Google Analytics with personally identifiable information.'
    const pp11 = 'Although Google Analytics plants a permanent cookie on your web browser to identify you as a unique user the next time you visit this site, the cookie cannot be used by anyone but Google. Google’s ability to use and share information collected by Google Analytics about your visits to this site is restricted by the Google Analytics Terms of Use and the Google Privacy Policy. You can prevent Google Analytics from recognizing you on return visits to this site by disabling cookies on your browser.'
    const pp12 = 'OPT-OUT & UPDATING YOUR INFORMATION'
    const pp13 = 'You can change or modify your information previously provided, as well as opt out of some or all communications from us, by using the contact methods below:'
    const pp14 = '1. Fill out our '
    const pp14L = 'contact form'
    const pp1402 = ' with your request.'
    const pp141 = '2. Email your request to '
    const pp1411 = 'contact@lighthouseaw.org.'
    const pp142 = '3. Send postal mail to the following address:'
    const pp15 = 'Lighthouse Media NA Inc'
    const pp151 = 'PO Box 1140'
    const pp152 = 'Temple City, CA 91780'
    const pp16 = 'CHANGES TO THIS PRIVACY POLICY'
    const pp17 = 'Lighthouse Arab World retains the right to make changes to this policy at any time without advance notice. This policy was last updated on May 27, 2021.'
    const pp18 = 'CONTACT US WITH QUESTIONS'
    const pp19 = 'You may contact us at any time with questions about this Privacy Policy by using the '
    const pp191 = 'contact form on this page'
    const pp192 = '.'


    return (
        <HomeLayout>
            <div className='flex-grow bg-home bg-cover bg-no-repeat flex flex-col items-center relative'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                <div className="flex-grow w-5/6 pt-40 pb-20 text-white z-20 relative">
                    <div className="bg-white/50 rounded-lg p-4">
                    <h2 className={`text-black text-6xl font-bold mb-14`}>{title}</h2>
                    <h2 className={`text-black text-xl mb-14`}>{subtitle}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp1}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp2}</h2>
                    <h2 className={`text-black text-3xl font-bold mb-6`}>{pp3}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp4}</h2>
                    <h2 className={`text-black text-3xl font-bold mb-6`}>{pp5}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp6}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp7}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp8}</h2>
                    <h2 className={`text-black text-3xl font-bold mb-6`}>{pp9}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp10}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp11}</h2>
                    <h2 className={`text-black text-3xl font-bold mb-6`}>{pp12}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp13}</h2>
                    <h2 className={`text-black text-xl mb-6 px-6`}>{pp14}<Link className="underline" href="/contact">{pp14L}</Link>{pp1402}</h2>
                    <h2 className={`text-black text-xl mb-6 px-6`}>{pp141}<a className="underline" href={`mailto:${pp1411}`}>{pp1411}</a></h2>
                    <h2 className={`text-black text-xl mb-6 px-6`}>{pp142}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-2 px-11`}>{pp15}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-2 px-11`}>{pp151}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-6 px-11`}>{pp152}</h2>
                    <h2 className={`text-black text-3xl font-bold mb-6`}>{pp16}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp17}</h2>
                    <h2 className={`text-black text-3xl font-bold mb-6`}>{pp18}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{pp19}<Link className="underline" href="/contact">{pp191}</Link>{pp192}</h2>
                    </div>
                </div>
            </div>
        <div className="flex"></div>
        </HomeLayout>
    )
}