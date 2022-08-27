import React, { useEffect, useState } from 'react';
import { Image } from 'semantic-ui-react'
import BrandService from '../services/brandService';

export default function BrandList() {

    const [brands, setBrands] = useState([]);



    useEffect(() => {
        let brandService = new BrandService();
        brandService.getBrands().then((result) => setBrands(result.data.data));
    }, []);

    return (
        <div>
            <Image.Group size="tiny">
                {brands.map((brand) => (
                    <Image className='brandImage' key={brand.brandId} src={brand.brandImagePath} />
                ))}
            </Image.Group>
        </div>
    );
}