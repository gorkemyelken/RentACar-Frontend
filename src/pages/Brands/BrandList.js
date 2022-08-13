import React, { useEffect, useState } from 'react';
import { Image } from 'semantic-ui-react'
import BrandService from '../../services/brandService';

export default function BrandList() {

    const [brands, setbrands] = useState([]);



    useEffect(() => {
        let brandService = new BrandService();
        brandService.getBrands().then((result) => setbrands(result.data.data));
    }, []);

    return (
        <div>
            <Image.Group size="tiny">
                {brands.map((brand) => (
                    <Image src={brand.brandImagePath} />
                ))}
            </Image.Group>
        </div>
    );
}