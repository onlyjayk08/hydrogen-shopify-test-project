import {
    Image, 
    Link
} from '@shopify/hydrogen';

export default function CollectionCard({collection}){

    return collection ? (
        <div className="mb-6">
            <Link to={`/collections/${collection.handle}`}>
                {collection.image ? (
                <Image width="622" height="465" image={collection.image} />
                ) : null}
                <strong>{collection.title}</strong>
            </Link>
        </div>
    ): null;

}