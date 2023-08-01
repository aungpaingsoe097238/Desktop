<template>
    <div class="flex items-center gap-1">
        <div class=" basis-1/2">
            <div class=" flex gap-2">
                <div class=" flex flex-col w-[30px] gap-1">
                    <div class=" border border-red-600"></div>
                    <div class=" border border-red-600"></div>
                    <div class=" border border-red-600"></div>
                    <div class=" border border-red-600"></div>
                </div>
                <slot name="close-btn"></slot>
                <div class=" flex flex-col w-full gap-1">
                    <div class=" border border-red-600"></div>
                    <div class=" border border-red-600"></div>
                    <div class=" border border-red-600"></div>
                    <div class=" border border-red-600"></div>
                </div>
            </div>
        </div>
        <div class=" text-2xl text-red-600">
            <slot name="title"></slot>
        </div>
        <div class=" basis-1/2">
            <div class=" flex flex-col gap-1">
                <div class=" border border-red-600"></div>
                <div class=" border border-red-600"></div>
                <div class=" border border-red-600"></div>
                <div class=" border border-red-600"></div>
            </div>
        </div>
    </div>
</template>