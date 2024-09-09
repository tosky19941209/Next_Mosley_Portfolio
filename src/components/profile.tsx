"use client"
const Name = () => {
    const name = "GREG MOSLEY"
    return (
        <div>
            <p className="text-[20px] font-bold text-[black]">
                RE/MAX Elite Realty
            </p>

            <p className="text-[40px] font-bold text-[black]">
                {name}
            </p>

            <p className="text-[20px] font-bold text-[black]">
                Associate
            </p>
        </div>
    )
}

const OfficeAddress = () => {
    const address = "Florida USA "
    const handleLocation = () => {
        // router.push("https://www.google.com/maps/search/?api=1&query=Florida%20USA")    
        // router.push("http://localhost:3000/trade")
        window.open("https://www.google.com/maps/search/?api=1&query=Florida%20USA", '_blank')
    }
    return (
        <div className="mt-10">
            <p className="text-[25px] text-[black]">Office Address:</p>
            <button
                className="text-[25px] text-[#1e4cce] "
                onClick={() => {
                    handleLocation()
                }}
            >
                {address}
            </button>
        </div>
    )
}

const Experience = () => {
    const experiences = [
        "20 Years Experience",
        "License #RB22001742"
    ]
    return (
        <div>
            <p className="text-[25px] text-[black] font-bold">Experience</p>
            {
                experiences.map((itm, idx) => (
                    <p
                        className="text-[15px] text-[black]"
                        key={idx}
                    >
                        {itm}
                    </p>
                ))
            }
        </div>
    )
}

const Language = () => {
    const langueges = [
        "English"
    ]
    return (
        <div>
            <p className="text-[25px] text-[black] font-bold">Language</p>
            {
                langueges.map((itm, idx) => (
                    <p
                        className="text-[15px] text-[black]"
                        key={idx}
                    >
                        {itm}
                    </p>
                ))
            }
        </div>
    )
}

const Specialties = () => {
    const specialties = [
        "Relocation",
        "Foreclosure Property",
        "New Construction",
        "Buyer Brokerage",
        "Condominiums",
        "Investments",
        "Investments",
        "Buyer Brokerage",
        "Buyer Brokerage",
        "Buyer Brokerage",
        "Condominiums",
        "Condominiums",
        "Foreclosure Property",
        "Foreclosure Property",
        "Condominiums",
        "Investments",
        "Investments",
        "Foreclosure Property",
        "Military",
        "Luxury Homes",
    ]
    return (
        <div>
            <p className="text-[25px] text-[black] font-bold">Specialties</p>
            {
                specialties.map((itm, idx) => (
                    <p
                        className="text-[15px] text-[black]"
                        key={idx}
                    >
                        {itm}
                    </p>
                ))
            }
        </div>
    )
}

const Hobbies = () => {
    const specialties = [
        "Shopping",
        "Cooking",
        "Music",
        "Walking / Running",
        "Education/Training/Growth",
        "Fitness",
        "Swimming",
        " Food/Wine",
        "Gardening",
        "Travel",
        "Yoga",
        " Weight Lifting"
    ]
    return (
        <div>
            <p className="text-[25px] text-[black] font-bold">Hobbies</p>
            {
                specialties.map((itm, idx) => (
                    <p
                        className="text-[15px] text-[black]"
                        key={idx}
                    >
                        {itm}
                    </p>
                ))
            }
        </div>
    )
}
const Profile = () => {
    return (
        <div className="w-[100%]">
            <Name />
            <OfficeAddress />

            <div className="flex flex-col xl:flex-row gap-32 mt-10">
                <Experience />
                <Language />
                <Specialties />
                <Hobbies />
            </div>
        </div>
    )
}

export default Profile