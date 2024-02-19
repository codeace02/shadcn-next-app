import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Skeleton } from './ui/skeleton'

export default function SkeletonCard() {
    return (
        <Card className='flex flex-col justify-between'>
            <CardHeader className='flex-row gap-4 items-center'>
                <Skeleton className='w-12 h-12 rounded-full'></Skeleton>
                <Skeleton className='h-6 flex-grow'></Skeleton>
            </CardHeader>
            <CardContent>
                <Skeleton className='h-4 flex-grow mt-4'></Skeleton>
                <Skeleton className='h-4 flex-grow mt-4'></Skeleton>
                <Skeleton className='h-4 w-1/2 mt-4'></Skeleton>
            </CardContent>
            <CardFooter>
                <Skeleton className='h-10 w-28'></Skeleton>
            </CardFooter>
        </Card>
    )
}
