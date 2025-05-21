import Image from "next/image";
import styles from "./page.module.css"; // 您需要更新或创建相应的样式

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/logo.png" // 确保 logo.png 在 public 文件夹中
          alt="Passui Logo"
          width={72}
          height={72}
          className={styles.logo}
        />
        <h1 className={styles.title}>Passui</h1>
        <p className={styles.subtitle}>
          Next-Generation DApp Interfaces with AI-Powered Sui Passkey Wallet
        </p>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h2>Welcome to Passui: The Future of DApp Interaction</h2>
          <p>
            Passui showcases a powerful paradigm for modern DApp front-end development.
            It&apos;s an innovative Sui Passkey AI Wallet, serving as a comprehensive blueprint
            for integrating seamless Passkey authentication, AI-driven user interaction,
            and core Sui blockchain operations. Discover how Passui makes decentralized
            applications more intuitive and secure.
          </p>
          <a
            href="https://github.com/lysrain21/Passui-a-sui-passkey-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Explore on GitHub
          </a>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>What is Passui?</h3>
          <p>
            Passui is designed to simplify and enhance the user experience on the Sui network.
            By combining the robust security of Passkeys with the intelligence of AI,
            Passui allows users to manage their assets and interact with DApps using
            natural language commands, abstracting away the complexities of blockchain technology.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Key Features</h3>
          <ul className={styles.featureList}>
            <li>
              <strong>Seamless Passkey Wallet Management:</strong> Create or load your
              Sui wallet effortlessly, secured by device Passkeys.
            </li>
            <li>
              <strong>Intuitive Sui Blockchain Interaction:</strong> Fetch balances,
              request testnet SUI, send SUI, and execute transactions with ease.
            </li>
            <li>
              <strong>AI-Powered Assistant:</strong> Use natural language commands (e.g.,
              &quot;send 0.5 SUI to Bob&quot;, &quot;check my balance&quot;) for blockchain operations,
              powered by the DeepSeek API.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Clear views for wallet overview,
              sending SUI, and AI interactions, with real-time status updates.
            </li>
            <li>
              <strong>Developer Blueprint:</strong> Serves as an open-source example for
              building next-generation DApps on the Sui platform.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>How It Works</h3>
          <p>
            Passui connects to the Sui testnet using `SuiClient` and manages Passkey
            credentials via `@mysten/sui/keypairs/passkey`. User&apos;s natural language
            commands are processed by an AI, which translates them into structured DApp
            instructions. Transactions are then built, signed using the device&apos;s Passkey,
            and executed on the Sui network, offering a secure and streamlined workflow.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          <p>
            Passui is built with a modern tech stack to deliver a robust and
            performant experience:
          </p>
          <ul className={styles.techStackList}>
            <li>Frontend: React, TypeScript</li>
            <li>Sui Interaction: @mysten/sui (Sui TypeScript SDK)</li>
            <li>AI Integration: DeepSeek API</li>
            <li>Build Tool (Conceptual Basis): Vite (Project uses Next.js)</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Learn more about Passui and contribute on{" "}
          <a
            href="https://github.com/lysrain21/Passui-a-sui-passkey-wallet"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
