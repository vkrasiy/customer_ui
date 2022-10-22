import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwelve from '~/components/features/products/product-twelve';

import { catFilter } from '~/utils';
import { productSlider } from '~/utils/data';

function TrendyCollection ( props ) {
    const { products = [], loading } = props;

    return (
        <div className="container trendy-products">
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-center mb-3">
                    <h2 className="title">Trending</h2>

                    <TabList className="nav nav-pills justify-content-center" role="tablist">
                        <Tab className="nav-item">
                            <span className="nav-link">All</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Women</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Men</span>
                        </Tab>
                    </TabList>
                </div>

                <div className="tab-content tab-content-carousel">
                    <TabPanel>
                        {
                            loading ?
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider } isTheme={ false }>
                                    {
                                        [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                            <div className="skel-pro" key={ index }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider } isTheme={ false }>
                                    {
                                        products.slice( 0, 5 ).map( ( item, index ) =>
                                            <ProductTwelve
                                                product={ item }
                                                key={ index } />
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ?
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider } isTheme={ false }>
                                    {
                                        [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                            <div className="skel-pro" key={ index }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider } isTheme={ false }>
                                    {
                                        catFilter( products, [ 'women' ] ).slice( 0, 5 ).map( ( item, index ) =>
                                            <ProductTwelve
                                                product={ item }
                                                key={ index } />
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ?
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider } isTheme={ false }>
                                    {
                                        [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                            <div className="skel-pro" key={ index }></div>
                                        )
                                    }
                                </OwlCarousel>
                                :
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" options={ productSlider } isTheme={ false }>
                                    {
                                        catFilter( products, [ 'men' ] ).slice( 0, 5 ).map( ( item, index ) =>
                                            <ProductTwelve
                                                product={ item }
                                                key={ index } />
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </TabPanel>
                </div>

            </Tabs>
        </div>
    )
}

export default TrendyCollection;