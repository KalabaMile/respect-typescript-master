const RasporedTreninga = () => {
    return (
        <div>
            <h1 className="text-primary-500 py-5">Raspored treninga</h1>
            <div className="flex flex-col pr-3">
                <div className="overflow-x-auto py-3 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-white">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-2">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 py-2">
                                            Naziv
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">
                                            Trener
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">
                                            Vrijeme
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            Body Shape
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            Nejla Salčin
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            @mdo
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            Lift&Burn
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            Alen Gluho
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            Boks
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            Asmir Vatreš
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            Tabata
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            Nejla Salčin
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            Crossfit
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            Asmir Vatreš
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            Body Fat Burning
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            Alen Gluho
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                                            Core 45
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            Alen Gluho
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RasporedTreninga;