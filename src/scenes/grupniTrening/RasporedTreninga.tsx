const RasporedTreninga = () => {
    return (
        <div className="mt-5">
            <div className="flex flex-col pr-3">
                <div className="overflow-x-auto py-3 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-transparent border-secondary-500">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-secondary-500 px-2 py-2">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-secondary-500 py-2">
                                            Naziv
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-secondary-500 px-6 py-2">
                                            Dan
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-secondary-500 px-6 py-2">
                                            Vrijeme
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-transparent border-b border-secondary-500">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-secondary-500">1.</td>
                                        <td className="text-sm text-secondary-500 font-light py-2 whitespace-nowrap">
                                            Body Shape
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            Pon Sri Pet
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            18:00-19:00
                                        </td>
                                    </tr>
                                    <tr className="bg-transparent border-b border-secondary-500">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-secondary-500">2.</td>
                                        <td className="text-sm text-secondary-500 font-light py-2 whitespace-nowrap">
                                            Lift&Burn
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            Pon Pet
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            19:00-20:00
                                        </td>
                                    </tr>
                                    <tr className="bg-transparent border-b border-secondary-500">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-secondary-500">3.</td>
                                        <td className="text-sm text-secondary-500 font-light py-2 whitespace-nowrap">
                                            Boks
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            Sri Pet
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            19:15-20:00
                                        </td>
                                    </tr>
                                    <tr className="bg-transparent border-b border-secondary-500">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-secondary-500">4.</td>
                                        <td className="text-sm text-secondary-500 font-light py-2 whitespace-nowrap">
                                            Tabata
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            Uto Čet
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            18:00-19:00
                                        </td>
                                    </tr>
                                    <tr className="bg-transparent border-b border-secondary-500">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-secondary-500">5.</td>
                                        <td className="text-sm text-secondary-500 font-light py-2 whitespace-nowrap">
                                            Crossfit
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            Uto Čet Pet Ned
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            19:00-20:00
                                        </td>
                                    </tr>
                                    <tr className="bg-transparent border-b border-secondary-500">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-secondary-500">6.</td>
                                        <td className="text-sm text-secondary-500 font-light py-2 whitespace-nowrap">
                                            Body Fat Burning
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            Uto Čet
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            20:10-21:10
                                        </td>
                                    </tr>
                                    <tr className="bg-transparent border-b border-secondary-500">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-secondary-500">7.</td>
                                        <td className="text-sm text-secondary-500 font-light py-2 whitespace-nowrap">
                                            Core 45
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            Sri
                                        </td>
                                        <td className="text-sm text-secondary-500 font-light px-6 py-2 whitespace-nowrap">
                                            19:00-20:00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className=" text-sm text-secondary-400">*Raspored treninga je podložan izmjenama</h1>
        </div>
    )
}

export default RasporedTreninga;