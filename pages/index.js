import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head";

import lacalFont from "next/font/local"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   solid,
//   regular,
//   brands,
//   icon
// } from '@fortawesome/fontawesome-svg-core/import.macro'

const nunitoSansLight = lacalFont({ src: "../fonts/NunitoSans-Light.ttf" })
const nunitoSansRegular = lacalFont({ src: "../fonts/NunitoSans-Regular.ttf" })
const nunitoSansBold = lacalFont({ src: "../fonts/NunitoSans-Bold.ttf" })
const nunitoSansBlack = lacalFont({ src: "../fonts/NunitoSans-Black.ttf" })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Italian Food</title>
        <meta name="keyword" content="ร้านอาหาร, อาหารอิตาเลี่ยน" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <main>
        {/* banner start */}
        <div className={styles.bg}>
          <div className="container px-4 mx-auto">
            <div className="columns-1 md:columns-2">
              <div className="inline-block py-36 lg:py-64 relative z-10">
                <h1 style={nunitoSansBlack.style} className="text-5xl lg:text-8xl text-white">
                  Delicious <br />
                  Italian Food
                </h1>

                <p className="text-white w-full md:w-9/12 mt-6 mb-16">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>

                <Link href="/" className="bg-[#e4aa3f] hover:bg-[#0a5c2c] shadow-lg text-center text-sm rounded-md w-40 h-12 inline-flex items-center justify-center text-[#000000] hover:text-[#ffffff]">
                  Get Started
                </Link>

                <div className="absolute bottom-0 left-16 w-40 lg:w-72">
                  <Image
                    src="/img-gl.png"
                    width={0}
                    height={0}
                    alt="gl"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="absolute bottom-54 right-0 w-24 lg:w-40">
                  <Image
                    src="/img-redchilli.png"
                    width={0}
                    height={0}
                    alt="redchilli"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div className="py-32 lg:py-40 relative">
                <div className={styles.animateShow}>
                  <Image
                    src="/img-b.png"
                    width={0}
                    height={0}
                    alt="banner"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="absolute top-32 left-2 w-16 md:w-18 lg:w-24">
                  <Image
                    src="/img-sun.png"
                    width={0}
                    height={0}
                    alt="sun"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}

        <div className="container px-4 mx-auto relative">
          <div className="absolute z-0 top-10 left-0 w-[120px] md:w-44 lg:w-64">
            <Image
              src="/img-plantgl.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="absolute z-0 top-10 right-0 w-[120px] md:w-44 lg:w-64">
            <Image
              src="/img-glrcl.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="p-0 py-20 xl:p-20 relative z-10">
            <h2 style={nunitoSansBold.style} className="text-center text-black text-2xl">Most Popular Recipe</h2>
            <p className="text-center text-[#b7b7b7] mt-3 mx-auto w-full md:w-9/12 lg:w-2/4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 relative">
              <Link href="/" className="rounded-sm overflow-hidden shadow-xl m-2 lg:m-4">
                <Image
                  src="/img-rcp1.jpg"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="columns-2 px-5 py-2 lg:px-10 lg:py-5">
                  <h5 style={nunitoSansBold.style} className="text-lg">Pasta</h5>

                  <p style={nunitoSansBold.style} className="text-[#50e1d7] text-end text-lg">$30</p>
                </div>
              </Link>
              <Link href="/" className="rounded-sm overflow-hidden shadow-xl m-2 lg:m-4">
                <Image
                  src="/img-rcp2.jpg"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="columns-2 px-5 py-2 lg:px-10 lg:py-5">
                  <h5 style={nunitoSansBold.style} className="text-lg">Hod Dog</h5>

                  <p style={nunitoSansBold.style} className="text-[#50e1d7] text-end text-lg">$30</p>
                </div>
              </Link>
              <Link href="/" className="rounded-sm overflow-hidden shadow-xl m-2 lg:m-4">
                <Image
                  src="/img-rcp3.jpg"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="columns-2 px-5 py-2 lg:px-10 lg:py-5">
                  <h5 style={nunitoSansBold.style} className="text-lg">Hamburger</h5>

                  <p style={nunitoSansBold.style} className="text-[#50e1d7] text-end text-lg">$30</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* order now start */}
        <div className={styles.bg1}>
          <div className="container px-4 mx-auto">
            <div className="w-full relative overflow-auto clear-none lg:clear-both">
              <div className="inline-block py-36 md:py-20 lg:py-52 relative z-10 pl-0 lg:pl-24 w-full md:w-[50%] lg:w-3/5 float-none md:float-right">
                <h2 style={nunitoSansRegular.style} className="text-3xl lg:text-6xl text-white">
                  Order Now!
                </h2>

                <h2 style={nunitoSansRegular.style} className="text-3xl lg:text-6xl text-white mt-4">
                  and <span className="bg-[#dc3a3a] px-3">Get 50% Off</span>
                </h2>

                <p className="text-white w-full lg:w-9/12 mt-6 mb-16">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas.
                </p>

                <Link href="/" className="bg-[#0a5c2c] hover:bg-[#e4aa3f] shadow-lg text-center text-sm rounded-md w-40 h-12 inline-flex items-center justify-center text-[#ffffff] hover:text-[#000000]">
                  Shop Now
                </Link>

                <div className="absolute bottom-0 right-0 w-40 lg:w-72">
                  <Image
                    src="/img-plantgl.png"
                    width={0}
                    height={0}
                    alt="sun"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="absolute top-20 right-0 w-28 lg:w-40">
                  <Image
                    src="/img-redchilli.png"
                    width={0}
                    height={0}
                    alt="redchilli"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div className="relative flex items-end w-full md:w-[50%] lg:w-2/5 float-none md:float-left">
                <div className="pt-0 md:pt-10 w-full md:w-[80%] mx-auto z-10">
                  <Image
                    src="/img-b1.png"
                    width={0}
                    height={0}
                    alt="banner"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[50%] md:top-[20%] lg:top-32 left-0 md:left-10 lg:left-0 xl:left-20 w-16 md:w-18 lg:w-24 z-10">
            <Image
              src="/img-sun.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/* order now end */}

        {/*  */}
        <div className="relative">
          <div className="container px-4 mx-auto">
            <div className="w-full relative overflow-auto clear-none lg:clear-both">
              <div className="relative flex items-end w-full md:w-[50%] lg:w-2/5 float-none md:float-right">
                <div className="pb-0 md:pb-10 w-full md:w-[80%] mx-auto z-10">
                  <Image
                    src="/img-b2.png"
                    width={0}
                    height={0}
                    alt="banner"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className={`${styles["wrap_Box"]} ${styles["bg_ylw"]}`}></div>
              </div>

              <div className="inline-block py-36 md:py-20 lg:py-52 relative z-10 pl-0 lg:pl-24 w-full md:w-[50%] lg:w-3/5 float-none md:float-left">
                <h2 style={nunitoSansRegular.style} className="text-3xl lg:text-6xl text-dark">
                  Great Taste <br />
                  and Good Quality
                </h2>

                <p className="text-[#b7b7b7] w-full lg:w-9/12 mt-6 mb-16">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas.
                </p>

                <Link href="/" className="bg-[#e4aa3f] hover:bg-[#0a5c2c] shadow-lg text-center text-sm rounded-md w-40 h-12 inline-flex items-center justify-center text-[#ffffff] hover:text-[#ffffff]">
                  Shop Now
                </Link>

                <div className="absolute top-20 md:top-5 lg:top-40 right-0 lg:right-20 w-28 md:w-36 lg:w-40">
                  <Image
                    src="/img-on.png"
                    width={0}
                    height={0}
                    alt="redchilli"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="-z-10 absolute bottom-10 lg:bottom-20 right-14 lg:right-60 w-24 md:w-36 lg:w-40">
                  <Image
                    src="/img-on.png"
                    width={0}
                    height={0}
                    alt="sun"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[25%] md:bottom-[40%] lg:bottom-auto top-auto lg:top-60 left-[-20px] md:left-[-20px] lg:left-0 xl:left-32 w-28 md:w-40">
            <Image
              src="/img-redchilli.png"
              width={0}
              height={0}
              alt="redchilli"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="z-10 absolute top-60 right-0 md:right-10 lg:right-0 xl:right-36 w-16 md:w-18 lg:w-24">
            <Image
              src="/img-sunyl.png"
              width={0}
              height={0}
              alt="redchilli"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/*  */}

        {/* order now start */}
        <div className={styles.bg2}>
          <div className="container px-4 mx-auto">
            <div className="w-full relative overflow-auto clear-none lg:clear-both">
              <div className="inline-block py-36 md:py-20 lg:py-44 relative z-10 pl-0 lg:pl-24 w-full md:w-[50%] lg:w-3/5 float-none md:float-right">
                <h2 style={nunitoSansRegular.style} className="text-3xl lg:text-6xl text-dark">
                  Order Now!
                </h2>

                <h2 style={nunitoSansRegular.style} className="text-3xl lg:text-6xl text-dark mt-4">
                  and <span className="bg-[#0a5c2c] px-3 text-white">Get 50% Off</span>
                </h2>

                <p className="text-dark w-full lg:w-9/12 mt-6 mb-16">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas.
                </p>

                <Link href="/" className="bg-[#e4aa3f] hover:bg-[#0a5c2c] shadow-lg text-center text-sm rounded-md w-40 h-12 inline-flex items-center justify-center text-[#000000] hover:text-[#ffffff]">
                  Shop Now
                </Link>

                <div className="absolute bottom-0 right-0 w-40 lg:w-72">
                  <Image
                    src="/img-plantgl.png"
                    width={0}
                    height={0}
                    alt="sun"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="absolute top-20 right-0 w-28 lg:w-40">
                  <Image
                    src="/img-redchilli.png"
                    width={0}
                    height={0}
                    alt="redchilli"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div className="relative flex py-36 md:py-12 lg:py-12 items-end w-full md:w-[50%] lg:w-2/5 float-none md:float-left">
                <div className="pt-0 md:pt-5 lg:pt-10 w-full md:w-[80%] mx-auto z-10">
                  <Image
                    src="/img-b3.png"
                    width={0}
                    height={0}
                    alt="banner"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[50%] md:top-[20%] lg:top-32 left-0 md:left-10 lg:left-0 xl:left-20 w-16 md:w-18 lg:w-24 z-10">
            <Image
              src="/img-sunrd.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/* order now end */}

        {/*  */}
        <div className="relative">
          <div className="container px-4 mx-auto">
            <div className="w-full relative overflow-auto clear-none lg:clear-both">
              <div className="relative flex items-end w-full md:w-[50%] lg:w-2/5 float-none md:float-right">
                <div className="py-20 lg:py-20 w-full md:w-[80%] mx-auto z-10">
                  <Image
                    src="/img-b3.png"
                    width={0}
                    height={0}
                    alt="banner"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className={`${styles["wrap_Box"]} ${styles["bg_pnk"]}`}></div>
              </div>

              <div className="inline-block py-36 md:py-20 lg:py-52 relative z-10 pl-0 lg:pl-24 w-full md:w-[50%] lg:w-3/5 float-none md:float-left">
                <h2 style={nunitoSansRegular.style} className="text-3xl lg:text-6xl text-dark">
                  Great Taste <br />
                  and Good Quality
                </h2>

                <p className="text-[#b7b7b7] w-full lg:w-9/12 mt-6 mb-16">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas.
                </p>

                <Link href="/" className="bg-[#f69191] hover:bg-[#0a5c2c] shadow-lg text-center text-sm rounded-md w-40 h-12 inline-flex items-center justify-center text-[#ffffff] hover:text-[#ffffff]">
                  Shop Now
                </Link>

                <div className="absolute top-20 md:top-5 lg:top-40 right-0 lg:right-20 w-28 md:w-36 lg:w-40">
                  <Image
                    src="/img-on.png"
                    width={0}
                    height={0}
                    alt="redchilli"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="-z-10 absolute bottom-10 lg:bottom-20 right-14 lg:right-60 w-24 md:w-36 lg:w-40">
                  <Image
                    src="/img-on.png"
                    width={0}
                    height={0}
                    alt="sun"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[25%] md:bottom-[40%] lg:bottom-auto top-auto lg:top-60 left-[-20px] md:left-[-20px] lg:left-0 xl:left-32 w-28 md:w-40">
            <Image
              src="/img-redchilli.png"
              width={0}
              height={0}
              alt="redchilli"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="z-10 absolute top-60 right-0 md:right-10 lg:right-0 xl:right-36 w-16 md:w-18 lg:w-24">
            <Image
              src="/img-sunyl.png"
              width={0}
              height={0}
              alt="sunyl"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/*  */}

        <div className="relative pt-20">
          <div className="absolute z-0 top-0 right-0 w-32 lg:w-64">
            <Image
              src="/img-s2.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="container px-4 mx-auto relative z-10">
            <div className="p-0 py-0 lg:p-20">
              <h2 style={nunitoSansBold.style} className="text-center text-black text-2xl">How it Works</h2>
              <p className="text-center text-[#b7b7b7] mt-3 mx-auto w-full md:w-9/12 lg:w-2/4">
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas.
              </p>

              <ul className={`${styles.listIcon} py-10 lg:p-20`}>
                <li>
                  <div className={`${styles["square"]} ${styles["bg_pp"]}`}>
                    <Image
                      src="/i-store.png"
                      width={0}
                      height={0}
                      alt="store"
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </li>
                <li>
                  <div className={`${styles["square"]} ${styles["bg_yl"]}`}>
                    <Image
                      src="/i-cash.png"
                      width={0}
                      height={0}
                      alt="store"
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </li>
                <li>
                  <div className={`${styles["square"]} ${styles["bg_pnk"]}`}>
                    <Image
                      src="/i-paper-bag.png"
                      width={0}
                      height={0}
                      alt="store"
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute z-0 bottom-0 left-0 w-32 lg:w-64">
            <Image
              src="/img-s1.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/*  */}
        <div className="bg-[#f4f4f4]">
          <div className="container px-4 mx-auto relative">
            <div className="absolute top-56 right-0 lg:right-0 xl:right-0 z-10 w-[120px] md:w-28 lg:w-40">
              <Image
                src="/img-on.png"
                width={0}
                height={0}
                alt="redchilli"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="px-0 md:px-10 lg:px-20 pt-20 lg:pt-20">
              <h2 style={nunitoSansBold.style} className="text-center text-black text-2xl">Our Best Chef</h2>
              <p className="text-center text-[#b7b7b7] mt-3 mx-auto w-full md:w-9/12 lg:w-2/4">
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas.
              </p>

              <div className="relative flex flex-wrap items-end pb-20 w-full md:w-[100%] lg:w-[800px] mx-auto pt-24">
                <div className={styles.imgBox}>
                  <Image
                    src="/img-chef.png"
                    width={0}
                    height={0}
                    alt="chef"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="absolute top-12 left-0 md:left-[250px] z-10 w-[120px] md:w-28 lg:w-40">
                  <Image
                    src="/img-redchilli.png"
                    width={0}
                    height={0}
                    alt="redchilli"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="bg-[#30c4ba] w-full md:w-[90%] lg:w-[90%] xl:w-[90%] ml-auto ps-4 md:ps-48 lg:ps-44 xl:ps-44 pe-4 md:pe-8 py-4 md:py-8 rounded-3xl">
                  <p className="text-white">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                  </p>

                  <h3 style={nunitoSansBold.style} className="text-white text-lg mt-8 md:mt-9">Daniel Aiello</h3>
                  <p className="text-white mb-0 md:mb-6">
                    Lead Chef
                  </p>
                </div>

                <div className="w-32 md:w-44 absolute bottom-0 right-0 md:right-0 xl:right-0 z-10 rotate-180">
                  <Image
                    src="/img-b2.png"
                    width={0}
                    height={0}
                    alt="banner"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="container px-4 mx-auto relative">
          <div className="absolute z-0 top-10 left-0 w-[120px] md:w-44 lg:w-64">
            <Image
              src="/img-plantgl.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="absolute z-0 top-10 right-0 w-[120px] md:w-44 lg:w-64">
            <Image
              src="/img-glrcl.png"
              width={0}
              height={0}
              alt="sun"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="p-0 py-20 lg:p-20 relative z-10">
            <h2 style={nunitoSansBold.style} className="text-center text-black text-2xl">Our Gallery Menu</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 relative">
              <Link href="/" className={styles.wrapMenu}>
                <Image
                  src="/m1.png"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />

                <div className={styles.wrapBox}>
                  <p>View Receipe</p>
                </div>
              </Link>

              <Link href="/" className={styles.wrapMenu}>
                <Image
                  src="/m2.png"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />

                <div className={styles.wrapBox}>
                  <p>View Receipe</p>
                </div>
              </Link>

              <Link href="/" className={styles.wrapMenu}>
                <Image
                  src="/m3.png"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />

                <div className={styles.wrapBox}>
                  <p>View Receipe</p>
                </div>
              </Link>

              <Link href="/" className={styles.wrapMenu}>
                <Image
                  src="/m4.png"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />

                <div className={styles.wrapBox}>
                  <p>View Receipe</p>
                </div>
              </Link>

              <Link href="/" className={styles.wrapMenu}>
                <Image
                  src="/m5.png"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />

                <div className={styles.wrapBox}>
                  <p>View Receipe</p>
                </div>
              </Link>

              <Link href="/" className={styles.wrapMenu}>
                <Image
                  src="/m6.png"
                  width={0}
                  height={0}
                  alt="gl"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />

                <div className={styles.wrapBox}>
                  <p>View Receipe</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="container px-4 mx-auto">
          <div className="py-20 lg:py-20">
            <div className="grid grid-cols-6 gap-4 items-center">
              <div className="col-span-6 md:col-span-3">
                <Link href="/" className="shadow-xl block">
                  <Image
                    src="/vdo.png"
                    width={0}
                    height={0}
                    alt="redchilli"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Link>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="ps-0 md:ps-10">
                  <h2 style={nunitoSansBold.style} className="text-black text-3xl">Company Profile</h2>
                  <p className="text-[#b7b7b7] mt-3">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, officia deserunt mollit anim id est laborum.
                  </p>

                  <ul className={`${styles["listcontact"]}`}>
                    <li className={`${styles["linkcontact"]} ${styles["bg_bl"]}`}>
                      <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                      </Link>
                    </li>

                    <li className={`${styles["linkcontact"]} ${styles["bg_pp"]}`}>
                      <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                      </Link>
                    </li>

                    <li className={`${styles["linkcontact"]} ${styles["bg_sk"]}`}>
                      <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="relative">
          <div className="relative md:absolute top-[auto] md:top-[50%] translate-y-[auto] md:translate-y-[-50%] w-full py-5">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#ffffff] p-4 md:p-8 rounded-xl shadow-lg">
                  <h2 style={nunitoSansBold.style} className="text-black text-2xl">Contact Us</h2>

                  <form>
                    <label className="block mt-3">
                      <input type="email" name="email" className="mt-1 px-3 py-2 bg-[#f7f7f7] placeholder-slate-400 focus:outline-none focus:border-[#e4aa3f] focus:ring-[#e4aa3f] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Name" />
                    </label>

                    <label className="block mt-3">
                      <input type="email" name="email" className="mt-1 px-3 py-2 bg-[#f7f7f7] placeholder-slate-400 focus:outline-none focus:border-[#e4aa3f] focus:ring-[#e4aa3f] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Gender" />
                    </label>

                    <label className="block mt-3">
                      <textarea type="email" rows="3" name="email" className="mt-1 px-3 py-2 bg-[#f7f7f7] placeholder-slate-400 focus:outline-none focus:border-[#e4aa3f] focus:ring-[#e4aa3f] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Messages" />
                    </label>

                    <Link href="/" className="bg-[#50e1d7] hover:bg-[#e4aa3f] text-center text-sm w-40 h-10 flex items-center justify-center text-[#000000] hover:text-[#ffffff] mt-7 mx-auto">
                      Send Messages
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.4864070206568!2d100.61528607604666!3d13.989148291752235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281d8ea4a968b%3A0x2154f5fc55afbd1d!2z4Lif4Li04Lin4LmA4LiI4Lit4Lij4LmMIOC4nuC4suC4o-C5jOC4hCDguKPguLHguIfguKrguLTguJU!5e0!3m2!1sth!2sth!4v1696842953820!5m2!1sth!2sth"></iframe>
        </div>
      </main>
    </>
  )
}
