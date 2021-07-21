import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.scss';

function FeatureCell(props) {
  return (
    <div className={styles.featureCell}>
      <div className={styles.featureSymbol}>
        ›
      </div>
      <div className={styles.featureContent}>
        <h3>{props.title}</h3>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

function Testimonial(props) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>
        {props.title}
      </h4>
      <div className={styles.testimonial}>
        {props.children}
      </div>
      <div className={styles.author}>
        {props.author}<span className={styles.job}>, {props.job}</span>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  return (
    <Layout  
      description="Elegant and complete Node.Js web framework based on TypeScript.">
        <header className={styles.masthead}>
          <div className={styles.content}>
            <h1>The elegant NodeJS framework</h1>
            <h3>Build prototypes in hours, full applications in days.</h3>
            <div>
              <Link
                className={styles.btn}
                to={useBaseUrl("docs/tutorials/simple-todo-list/1-installation")}>
                Get started
              </Link>
              <Link
                className={`${styles.btn} ${styles.btnSecondary}`}
                to="https://discord.gg/QUrJv98">
                Join the chat
              </Link>
            </div>
          </div>
        </header>
        <section>
          <div className={styles.screenshotContainer}>
            <img src={useBaseUrl('img/home/screenshot.png')} alt="" />
          </div>
          <div className={`${styles.section2} ${styles.smallSection}`}>
            <div className={styles.metrics}>
              <div>
                <div className={styles.number}>2,100<span className={styles.plus}>+</span></div>
                <div className={styles.caption}>acceptance <br/> and unit tests</div>
              </div>
              <div>
                <div className={styles.number}>11,000<span className={styles.plus}>+</span></div>
                <div className={styles.caption}>lines of <br/>documentation</div>
              </div>
              <div>
                <div className={styles.number}>4 years</div>
                <div className={styles.caption}>of active <br/>development</div>
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.feature}>
              <div className={styles.col1}>
                <h2>All-in-One Framework 🚀</h2>
                <p>
                  The foundation is already there.
                  You don't have to rebuild everything from scratch or find and make 3rd-party packages work together.
                  Everything is included.
                  <br/>
                  <br/>
                  But if you wish, you can still import and use your favorite libraries. The framework is extensible.
                </p>
              </div>
              <div className={styles.col2}>
                <div className={styles.featureRow}>
                  <FeatureCell title="CLI">
                    Build and run your app in development and in production. Generate files.
                  </FeatureCell>
                  <FeatureCell title="ORM">
                    Take advantage of TypeORM and generate migrations from your models.
                  </FeatureCell>
                </div>
                <div className={styles.featureRow}>
                  <FeatureCell title="JWTs and Session Tokens">
                    Implement stateful or stateless authentication with cookies or the Authorization header.
                  </FeatureCell>
                  <FeatureCell title="Unit and E2E tests">
                    Write automated tests with a ready-to-use environment and a simple dependency injection system.
                  </FeatureCell>
                </div>
                <div className={styles.featureRow}>
                  <FeatureCell title="Swagger Generation">
                    Generate an OpenAPI specification and a Swagger page directly from your code.
                  </FeatureCell>
                  <FeatureCell title="Roles and Permissions">
                    Control routes access with static roles or dynamic permissions.
                  </FeatureCell>
                </div>
                <div className={styles.featureRow}>
                  <FeatureCell title="Shell Scripts">
                    Create scripts to be run from the command line with argument validation.
                  </FeatureCell>
                  <FeatureCell title="File Upload and Storage">
                    Validate uploaded files and save them in local or in the Cloud (AWS S3).
                  </FeatureCell>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.feature}>
              <div className={styles.col1}>
                <h2>Simple and Intuitive 👌</h2>
                <p>
                  In Foal, you only manage three concepts: controllers, services and hooks.
                  <br/>
                  <br/>
                  Complexity and unnecessary abstractions are set aside
                  so that you spend more time coding rather than reading the documentation.
                  <br />
                  <br />
                  No steep learning curve or over-engineering here.
                </p>
              </div>
              <div className={styles.col2}>
                <div className={styles.architectureWrapper}>
                  <img src={useBaseUrl('img/home/architecture2.png')} alt="" className={styles.codeImage} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.feature}>
              <div className={styles.col2}>
                <div className={styles.typescriptWrapper}>
                  <div>
                    <svg  viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z" fill="#3178c6" fillRule="evenodd"></path></svg>
                    <strong>TypeScript</strong>
                  </div>
                </div>
              </div>
              <div className={styles.col1}>
                <h2>TypeScript Language</h2>
                <p>
                Foal leverages TypeScript to improve the overall quality of your code
                and detect most of your careless errors during compilation.
                The language also gives you autocompletion and a well-documented API.
                </p>
              </div>
            </div>
          </div>
          {/* <div className={styles.section2}>
            <div className={styles.testimonials}>
              <h2>What they say about Foal</h2>
              <div className={styles.content}>
                <Testimonial title="The missing NodeJS framework!" author="Loïc Poullain" job="fullstack developer">
                  This is an awesome product.
                </Testimonial>
                <Testimonial title="Straightforward architecture" author="Loïc Poullain" job="fullstack developer">
                  This is an awesome product.
                </Testimonial>
                <Testimonial title="Awesome" author="Loïc Poullain" job="fullstack developer">
                  This is an awesome product.
                </Testimonial>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.section1}> */}
          <div className={styles.section2}>
            <div className={styles.getStarted}>
              <Link
                className={styles.btn}
                to={useBaseUrl("docs/tutorials/simple-todo-list/1-installation")}>
                Get started
              </Link>
            </div>
          </div>
          <footer className={styles.footerWrapper}>
            <div className={styles.footer}>
              <a className={styles.githubLink} href="https://github.com/FoalTS/foal"></a>
              <a className={styles.twitterLink} href="https://twitter.com/FoalTs"></a>
              <a className={styles.youtubeLink} href="https://www.youtube.com/channel/UCQFojM334E0YdoDq56MjfOQ"></a>
              <a className={styles.chatLink} href="https://discord.gg/QUrJv98"></a>
            </div>
          </footer>
        </section>
    </Layout>
  );
}

export default Home;
