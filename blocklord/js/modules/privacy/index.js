import React, {
    Component
} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Logo from '../topBar/logo';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #555;
    font-family: 'Exo 2', sans-serif;
    overflow-y: scroll;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
`;

const FAQ = styled.div `
    padding: 30px;
    border-radius: 2px;
    margin: 10px auto;
    background: white;
    max-width: 600px;
`;

const Section = styled.h2 `
    margin: 30px auto 20px;
    text-align: center;
    color: white;
`;

const LogoContainer = styled.div `
    margin: auto;
    padding: 26px;
    background: #3329a5;
    border-radius: 4px;
    margin-top: 30px;
`;

class Terms extends Component {

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
    }

    render() {
        return ( <
            Container >
            <
            LogoContainer >
            <
            Logo / >
            <
            /LogoContainer> <
            div >
            <
            Section > Last Updated: February 1, 2018 < /Section> <
            FAQ >
            <
            p > We at Blocklord("Gitradar Ltd", “we, ”or“ us”) believe that your privacy is a fundamental right.We have written this privacy policy(this“ Policy”) to reflect our values, and to clearly describe what information we collect from you when you use our specially - developed smart contracts to own, transfer, digital blocks on the world map("Blocks"), which can then be visualized on a website(www.blocklord.co) that users can interact with(the & nbsp;“ Site”), as well as how we protect and use that information.The smart contracts and the Site are collectively referred to in this Policy as the“ App”.By using the App, you agree that we can collect, use, disclose, and process your information as described in this Policy.This Policy only applies to the App, and not to any other websites, products or services you may be able to access or link to via the App.We encourage you to read the privacy policies of any other websites you visit before providing your information to them. < /p> <
            p > While our values will not shift, the App will evolve over time, and this Policy will change to reflect that evolution.If we make changes, we will notify you by revising the date at the top of this Policy.In some cases,
            if we make significant changes, we may give you additional notice by adding a statement to our homepage, or by sending you an email notification.We encourage you to review this Policy periodically to stay informed about our practices. < /p> <
            /FAQ> <
            FAQ >
            <
            h3 > Information Collection < /h3> <
            p > < strong > Information We Do Collect < /strong></p >
            <
            p > We will ask you to provide us with Ethereum wallet address, email address or Twitter login. < /p> <
            p > We also collect basic analytics and log - in information when you use the App.This sort of information may be collected from third - party providers like Facebook or Google Analytics, and includes, among other things, the type of device you use, access times, IP address, hardware model, operating system and version, and other unique device identifiers.Some of these third - party providers may place cookies or pixels - small data files stored on your hard drive or in device memory - on your browser or hard drive.Note that this Policy does not cover the use of cookies or pixels by such third parties.Most web browsers are set to accept cookies and pixels by
            default, but you can usually set your browser to remove or reject browser cookies or pixels.If you do choose to remove or reject cookies or pixels, however, your ability to use the App might be affected. < /p> <
                p > < strong > Information We Don’ t Collect < /strong></p >
                <
                p > We do not collect any other personally - identifiable information about you, unless you give it to us directly: by filling out a form, creating an account, giving us written feedback, communicating with us via third party social media sites, or otherwise communicating with us via the App or any other means.We do not collect any payment information from you, other than your Ethereum wallet address. < /p> <
                        /FAQ> <
                        FAQ >
                        <
                        h3 > Information Usage < /h3> <
                        p > < strong > What We Do With Information We Collect < /strong></p >
                        <
                        p > We use the information we collect in the following ways: < /p> <
                        ul >
                        <
                        li > To analyze trends
                    for
                    how the App is being used; < /li> <
                li > To improve the App; < /li> <
            li > To help personalize your experience of the App; and < /li> <
            li > If you gave us your contact information, we will use it to send you data as part of making the App available to you.We may also use that information to contact you to send you technical notices, updates, confirmations, security alerts, to provide support to you, to tell you about other products and services that we think might interest you, or to respond to your comments or questions. < /li> <
            /ul> <
            p > We may share the information we collect with third parties who need to access it in order to do work on our behalf, including doing things like helping us make the App available, or providing analytics services
            for
            us.We work hard to ensure that these third parties only access and use your information as necessary to perform their functions. < /p> <
            p > We will create aggregations and anonymizations that contain your information in a way that does not directly identify you.We may use and / or share those aggregations and anonymizations
            for a variety of purposes related to the App, or our company and its business. < /p> <
            p > < strong > What We Don’ t Do With Information We Collect < /strong></p >
            <
            p > We do not share any information that directly identifies you with any third party, except in the following limited cases: < /p> <
                ul >
                <
                li > As required to comply with applicable law or regulation, or to comply with law enforcement; < /li> <
            li > To respond to claims and / or legal process; < /li> <
            li > To protect our rights or our property, or to enforce our terms of service; < /li> <
            li > To prevent behavior that is(or that we think may be) illegal or unethical; < /li> <
            li > To prevent behavior that is(or that we think may be) illegal or unethical; < /li> <
            li > With your consent, or at your request or direction; or < /li> <
            li > As otherwise set forth in this Policy. < /li> <
            /ul> <
            p > < strong > Information Processing < /strong></p >
            <
            p > Depending on where you are located, your information may need to be transferred to different servers around the world as part of using the App.Since we are based in United Kingdom, any information we collect is governed by British law.You acknowledge that, as part of making the App available to you, we may transfer your information to or maintain your information on computers located outside of your state, province, country, or other governmental jurisdiction, where the privacy laws may not be as protective as those in your jurisdiction.If you are located outside of the United Kingdom and you choose to provide your information to us, you agree that we have the right to transfer your information to United Kingdom and process it there.By using the App, or by otherwise providing any information to us, you consent to the processing and transfer of that information in and to the United Kingdom, the U.S., and other countries. < /p> <
            /FAQ> <
            FAQ >
            <
            h3 > Information Security < /h3> <
            p > We take safeguarding your information seriously.We will take reasonable administrative, physical, and electronic measures to help protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration or destruction.All that said, no method of transmitting or storing information over the Internet is completely secure.With that in mind, we cannot guarantee the absolute security of your information. < /p> <
            /FAQ> <
            FAQ >
            <
            h3 > Our Policy Towards Children < /h3> <
            p > The App is not intended
            for use by children under the age of 13. If you are the parent or guardian of a child under the age of 13 and you become aware that your child has provided personally identifiable information to us without your and their consent, contact us at info @blocklord.co.If we become aware that a child under the age of 13 has provided us with their personally identifiable information, we will remove that information from our files. < /p> <
            h3 > Contact Us < /h3> <
            p > By contacting us at info @blocklord.co, you can: < /p> <
            ul >
            <
            li > See what information we have about you,
            if any; < /li> <
            li > Change / correct any personal data we have about you; < /li> <
            li > Have us delete any personal data we have about you(we will do our best to do so, but we may have to keep certain data as required by law, to comply with this Policy, or pursuant to our normal caching procedures); < /li> <
            li > Opt out of receiving promotional communications from us; or < /li> <
            li > Ask questions or provide feedback on this Policy generally, or the use of your information. < /li> <
            /ul> <
            /FAQ> <
            /div> <
            /Container>
        );
    }
};
export default Terms;



// WEBPACK FOOTER //
// ./src/modules/privacy/index.js