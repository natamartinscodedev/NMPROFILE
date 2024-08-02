"use client"

import { useRouter } from "next/navigation"

export default function LanguageSelector({ location }: any) {
    const router: any = useRouter()
    const localeActual = ['ptbr', 'en']

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = event.target.value
        router.replace(`/${selectedLocale}`)
    }

    return (
        <select  className='button-translation' id="language-select" value={location} onChange={changeLanguage}>
            {localeActual.map((loc: any) => (
                <option key={loc} value={loc}>
                    {loc}
                </option>
            ))}
        </select>
    )
}
